'use server';
import prisma from '@/db';
// import bcrypt from 'bcryptjs';

// export async function createUser(email, password) {
// 	// const hashPassword = await bcrypt.hash(password, 10);
// 	// password = hashPassword;

// 	const user = await prisma.user.create({
// 		data: {
// 			email: email,
// 			password: password,
// 		},
// 	});
// 	console.log('Created user:', user);
// }

// createUser().catch((e) => {
// 	console.error("Error creating user----------------------------------------------", e);
// });

export async function findUser(email) {
	try {
		const user = await prisma.user.findUnique({
			where: {
				email: email,
			},
		});
		console.log('Found user:', user);
		return user;
	} catch (error) {
		console.error('Error finding user:', error);
		return null;
	}
}

export async function createProduct(formData, imagePath) {
	try {
		const category = await prisma.category.findFirst({
			where: { name: formData.category },
			select: {
				name: true,
			},
		});

		if (!category) {
			throw new Error('Category not found');
		}

		const categoryId = category.id;
		const categoryName = category.name;

		const product = await prisma.product.create({
			data: {
				isAvailable: false,
				name: formData.name,
				description: formData.description,
				priceInCents: formData.priceInCents,
				category: { connect: { id: categoryId, name: categoryName } },
				imagePath,
			},
		});

		console.log('Product created successfully!');
		return product;
	} catch (error) {
		console.error('Error creating product:', error);
		return null;
	}
}

export async function getCategories() {
	const categories = await prisma.category.findMany();
	return categories;
}

 export async function getProducts() {
		const products = await prisma.product.findMany();
		return products;
 }