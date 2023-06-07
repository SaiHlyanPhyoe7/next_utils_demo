"use client";

import React, { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "./prefetch";
import Loading from "./loading";
import Link from "next/link";
interface PostType {
	post: {
		title: string;
		body: string;
	};
}

const session = null;

export default function Page() {
	// if (!session) throw new Error("Error is happening.");
	const { isLoading, error, data, isFetching } = useQuery({
		queryKey: ["todoData"],
		queryFn: () => getData(),
	});

	if (isLoading || !data) return "Loading...";

	return (
		<Suspense fallback={<Loading />}>
			<Link href="/server-action">Goto Server Action</Link>
			<div>
				{data?.map((post: any) => {
					return <Posts key={post.id} post={post}></Posts>;
				})}
			</div>
		</Suspense>
	);
}

function Posts({ post }: PostType) {
	return (
		<div>
			{post.title}
			{post.body}
		</div>
	);
}
