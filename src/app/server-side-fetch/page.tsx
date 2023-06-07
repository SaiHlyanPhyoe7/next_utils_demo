"use client";

import React, { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getData } from "./prefetch";
import Loading from "./loading";
import Link from "next/link";

export default function Page() {
	// const data = await getData();

	const { isLoading, error, data, isFetching } = useQuery({
		queryKey: ["todoData"],
		queryFn: () => getData(),
	});

	if (isLoading || !data) return "Loading...";

	// if (error) return "An error has occurred: " + error;

	return (
		<Suspense fallback={<Loading />}>
			<Link href="/server-action">Goto Server Action</Link>
			{/* {data} */}
			<div>
				{data?.map((post: any) => {
					return (
						<div key={post.id}>
							{post.title}
							{post.body}
						</div>
					);
				})}
			</div>
		</Suspense>
	);
}
