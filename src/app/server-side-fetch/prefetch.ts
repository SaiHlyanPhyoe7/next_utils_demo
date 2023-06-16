"use server";

import axios from "axios";

export async function getData() {
	const res = await axios
		.get("https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10")
		.then((res) => res.data);
	// console.log("Result Get Data is :", res);
	return res;
}
