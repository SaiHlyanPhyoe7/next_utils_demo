import React from "react";

const page = () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const number = numbers.find((num) => num === 3);
	// console.log("From Real Route: ", number);

	return (
		<div className="container mx-auto my-10">
			<div className="w-1/2 mx-auto border border-gray-700">
				From Real Route
				{number}
			</div>
		</div>
	);
};

export default page;
