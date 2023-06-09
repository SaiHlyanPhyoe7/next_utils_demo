import { revalidatePath } from "next/cache";
import React, { Suspense } from "react";
import { addToItem } from "./actions";
import Loading from "./loading";
import Link from "next/link";

interface Data {
	username: string;
	email: string;
	password: string;
	phoneNumber: number;
}

const page = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Link href="/server-side-fetch">goto Server Side Fetch</Link>

			<div className="h-screen">
				<form
					className="flex flex-col gap-6 h-full justify-center items-center"
					action={addToItem}
				>
					<h2>Todos</h2>
					<input
						name="username"
						className="border border-black rounded-md p-4"
						type="text"
						placeholder="Your Username"
					/>
					<input
						name="email"
						className="border border-black rounded-md p-4"
						type="email"
						placeholder="Your Email"
					/>
					<input
						name="password"
						className="border border-black rounded-md p-4"
						type="password"
						placeholder="Your Password"
					/>
					<input
						name="phoneNumber"
						className="border border-black rounded-md p-4"
						type="number"
						placeholder="Your Phone Number"
					/>
					<button
						type="submit"
						className="bg-indigo-400 active:shadow-md ow rounded-md px-4 py-3 text-white"
					>
						Submit
					</button>
				</form>
			</div>
		</Suspense>
	);
};

export default page;
