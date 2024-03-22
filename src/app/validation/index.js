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