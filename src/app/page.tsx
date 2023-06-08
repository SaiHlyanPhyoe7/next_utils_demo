import Image from "next/image";
import Link from "next/link";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
	return (
		<div className="flex justify-center items-center h-screen gap-4">
			{numbers.map((num) => {
				return (
					<div
						className="bg-indigo-400 rounded-md text-white px-4 py-2"
						key={num}
					>
						<Link href={`numbs/${num}`}>{num}</Link>
					</div>
				);
			})}
		</div>
	);
}

