"use server";

import { revalidatePath } from "next/cache";

export async function addToItem(formData: any) {
	"use server";

	const formDataValue = {
		username: formData.get("username"),
		email: formData.get("email"),
		password: formData.get("password"),
		phoneNumber: formData.get("phoneNumber"),
	};

	revalidatePath("/server-action");

	console.log("Server Action :", formDataValue);
}
