'use client';

import React from 'react';
import './page.modules.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { signupRequestSchema } from '../validation';
import { useForm } from 'react-hook-form';
import { createUser } from '../api/user/dbFunctions/db';
import Link from 'next/link';


export default function Signup() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		resolver: yupResolver(signupRequestSchema)
	});

	const formSubmit = async (data) => {
		console.table(data);

		createUser(data.email, data.password)
		
	};

	return (
		<div className='container'>
			<form onSubmit={handleSubmit(formSubmit)}>
				<div className='formTitle'>
					<p>Create an account</p>
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
				<div>
					<label htmlFor='confirmPassword'>Confirm password</label>
					<input
						type='password'
						name='confirmPassword'
						{...register('confirmPassword')}
					/>
					{errors && (
						<span className='errorMessage'>
							{errors.confirmPassword?.message}
						</span>
					)}
				</div>
				<div className='submitButton'>
					<button type='submit'>Create Account</button>
				</div>
			</form>

			<div><Link href='..'>Back</Link></div>
		</div>
	);
}
