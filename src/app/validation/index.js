import * as yup from 'yup';

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

export const adminProductSchema = yup
	.object()
	.shape({
		name: yup
			.string()
			.min(2, 'Name must be at least 2 characters')
			.required('Name is required'),
		description: yup.string().required('Description is required'),
		price: yup
			.number()
			.positive('Price cannot be negative or zero')
			.required('Price is required'),
		category: yup
			.string()
			.oneOf(['pet', 'beauty', 'home'])
			.required('Category is required'),
		images: yup
			.mixed()
			.test('required', 'You need to provide a file', (file) => {
				// return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
				if (file && file.size) return true;
				return false;
			})
			.test('fileSize', 'The file is too large', (file) => {
				//if u want to allow only certain file sizes
				return file && file.size <= 2000000;
			})
			.required('Images are required'),
	})
	.required();
