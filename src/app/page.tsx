import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

interface PostType {
	title: string;
	body: string;
}

async function getData() {
	const res = await axios
		.get("https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10")
		.then((res) => res.data);
	// console.log("Result Get Data is :", res);
	return res;
}

export default async function Home() {
	const serverData = await getData();
	console.log("Server Data is :", serverData);
	return (
		<div className="flex justify-center items-center h-screen gap-4">
			{numbers.map((num) => {
				return (
					<div
						className="bg-indigo-400 rounded-md text-white px-4 py-2"
						key={num}
					>
						{serverData.map((post: PostType) => {
							return <div key={post.title}>{post.body}</div>;
						})}
						<Link href={`numbs/${num}`}>{num}</Link>
					</div>
				);
			})}
		</div>
	);
}
