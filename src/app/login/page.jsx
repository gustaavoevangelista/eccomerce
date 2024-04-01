'use client';

import React from 'react';
import './page.modules.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginRequestSchema } from '../validation';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import bcrypt from 'bcryptjs';


export default function Login() {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		resolver: yupResolver(loginRequestSchema),
	});


	const onSubmit = async (data) => {
		// const hashPassword = await bcrypt.hash(data.password, 10);
		// data.password = hashPassword;
		
		console.table(data)
		const { email, password } = data;
		
		const result = await signIn('credentials', {
			email,
			password,
			redirect: false,
		}); //NOT WORKING

		 if (result.error) {
				console.log("Invalid credentials or something else")
			} else {
				// Redirect user after successful login
				router.push('/');
			}
		
	};

	return (
		<div className='container'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='formTitle'>
					<p>Enter your email to continue</p>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<input type='email' name='email' {...register('email')} />
					{errors && (
						<span className='errorMessage'>
							{errors.email?.message}
						</span>
					)}
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						{...register('password')}
					/>
					{errors && (
						<span className='errorMessage'>
							{errors.password?.message}
						</span>
					)}
				</div>
				<div className='submitButton'>
					<button type='submit'>Login</button>
				</div>
			</form>
			<div>
				<Link href='..'>Back</Link>
			</div>
		</div>
	);
}
