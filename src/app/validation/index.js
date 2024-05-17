import * as yup from 'yup';
import { z } from 'zod';

export const signupRequestSchema = yup
	.object()
	.shape({
		email: yup
			.string()
			.email('Email must be a valid email')
			.required('Email is required'),
		password: yup
			.string()
			.min(8, 'Password must be at least 8 characters')
			.required('Password is required'),
		confirmPassword: yup
			.string()
			.test('passwords-match', 'Passwords must match', function (value) {
				return this.parent.password === value;
			})
			.required('Confirm password is required'),
	})
	.required();

export const loginRequestSchema = yup
	.object()
	.shape({
		email: yup
			.string()
			.email('Email must be a valid email')
			.required('Email is required'),
		password: yup
			.string()
			.min(8, 'Password must be at least 8 characters')
			.required('Password is required'),
	})
	.required();

const ACCEPTED_IMAGE_TYPES = [
	'image/jpeg',
	'image/jpg',
	'image/png',
	'image/webp',
];

export const adminProductSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters'),
	description: z.string().min(2, 'Description must be at least 2 characters'),
	priceInCents: z.coerce.number().int().min(1, 'Price must be greater than 0'),
	category: z.enum(['pet', 'beauty', 'home'], {
		message: 'Choose one of the categories: Pet, Beauty, Home',
	}),
	images: z.any()
    .refine((files) => files?.length !== 0, "Image is required.")
		
});
