'use client'

import Link from "next/link";
import styles from './AdminProductForm.module.css'
import { yupResolver } from '@hookform/resolvers/yup';
import { adminProductSchema } from '../../../validation';
import { useForm } from 'react-hook-form';



export default function AdminProductForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		resolver: yupResolver(adminProductSchema),
	});

	function formSubmit(data) {
		console.log(data)
	}

  return (
		<form
			onSubmit={handleSubmit(formSubmit)}
			className={styles.newProductForm}>
			<div className={styles.productFormField}>
				<label htmlFor='name'>Name </label>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='Enter product name'
					className={styles.productFormInput}
					{...register('name')}
				/>
				{errors && (
					<span className={styles.errorMessage}>
						{errors.name?.message}
					</span>
				)}
			</div>

			<div className={styles.productFormField}>
				<label htmlFor='description'>Description </label>
				<textarea
					id='description'
					name='description'
					rows={4}
					className={styles.productFormInput}
					{...register('description')}
				/>
				{errors && (
					<span className={styles.errorMessage}>
						{errors.description?.message}
					</span>
				)}
			</div>

			<div className={styles.productFormField}>
				<label htmlFor='price'>Price</label>
				<input
					type='number'
					id='price'
					name='price'
					className={styles.productFormInput}
					{...register('price')}
				/>
				{errors && (
					<span className={styles.errorMessage}>
						{errors.price?.message}
					</span>
				)}
			</div>

			<div className={styles.productFormField}>
				<label htmlFor='category'>Category</label>
				<select
					id='category'
					name='category'
					className={styles.productFormInput}
					{...register('category')}>
					<option default>Select a category</option>
					<option value='pet'>Pet</option>
					<option value='beauty'>Beauty</option>
					<option value='home'>Home</option>
					
				</select>
				{errors && (
					<span className={styles.errorMessage}>
						{errors.category?.message}
					</span>
				)}
			</div>

			<div className={styles.productFormField}>
				<label htmlFor='images'>Images</label>
				<input
					type='file'
					name='images'
					id='images'
					className={styles.productFormInput}
					{...register('images')}
				/>
				{errors && (
					<span className={styles.errorMessage}>
						{errors.images?.message}
					</span>
				)}
			</div>

			<div className={styles.productFormButtons}>
				<button>
					<Link href='./'>BACK</Link>
				</button>

				<button type='submit'>SAVE</button>
			</div>
		</form>
  );
}
