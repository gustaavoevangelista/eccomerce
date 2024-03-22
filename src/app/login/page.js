'use client';

import React from 'react';
import './page.modules.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginRequestSchema } from '../validation';
import { useForm } from 'react-hook-form';

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		resolver: yupResolver(loginRequestSchema),
	});

	const onSubmit = (data) => {
		console.table(data);
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
		</div>
	);
}
