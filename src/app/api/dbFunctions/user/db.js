'use server';
import { prisma } from '@/db';
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


