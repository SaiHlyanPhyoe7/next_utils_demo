"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getData } from "./prefetch";

export default function Page() {
	// const data = await getData();

	const { isLoading, error, data, isFetching } = useQuery({
		queryKey: ["todoData"],
		queryFn: () => getData(),
	});

	if (isLoading || !data) return "Loading...";

	if (error) return "An error has occurred: " + error;

	return (
		<div>
			Test
			{/* {data} */}
			{data.map((post: any) => {
				return (
					<div key={post.id}>
						{post.title}
						{post.body}
					</div>
				);
			})}
		</div>
	);
}
