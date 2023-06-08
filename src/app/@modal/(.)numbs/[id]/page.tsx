import Modal from "@/components/modal/Modal";
import React from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function page() {
	const number = numbers.find((num) => num === 2);
	// console.log("From Modal Route: ", number);
	return (
		<Modal>
			<div>
				From Modal Route : {number}
				<h3>Hello World</h3>
			</div>
		</Modal>
	);
}

export default page;
