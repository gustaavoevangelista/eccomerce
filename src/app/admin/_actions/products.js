'use server';

import { createProduct } from '@/app/api/dbFunctions/user/db';
import { adminProductSchema } from '@/app/validation';
import fs from 'fs/promises';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function addProduct(formData) {
	
	const result = adminProductSchema.safeParse(
		Object.fromEntries(formData.entries()),
	);

	console.log(result);

	if (!result.success) {
		console.log(result.error.flatten());
		return result.error.formErrors.fieldErrors;
	}

	const data = result.data;

	await fs.mkdir('public/products', { recursive: true });

	const imagePath = `/products/${crypto.randomUUID()}-${data.images.name}`;

	await fs.writeFile(
		`public${imagePath}`,
		Buffer.from(await data.images.arrayBuffer()),
	);

	await createProduct({ ...data }, imagePath);

	// await prisma.product.create({
	// 	data: {
	// 		isAvailable: false,
	// 		name: data.name,
	// 		description: data.description,
	// 		priceInCents: data.priceInCents,
	// 		// category: data.category,
	// 		imagePath: imagePath,
	// 	},
	// });

	revalidatePath('/');
	revalidatePath('/products');

	// redirect('/admin/products');
}
