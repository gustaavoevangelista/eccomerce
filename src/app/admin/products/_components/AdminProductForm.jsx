'use client';

import Link from 'next/link';
import styles from './AdminProductForm.module.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { adminProductSchema } from '../../../validation';
import { useForm } from 'react-hook-form';
import { addProduct } from '../../_actions/products';
import { useEffect, useState } from 'react';
import { formatCategoryName } from '@/app/lib/formatters';

export default function AdminProductForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting },
	} = useForm({
		resolver: zodResolver(adminProductSchema),
	});

	const [categories, setCategories] = useState([]);

	useEffect(() => {
		async function fetchCategories() {
			try {
				const response = await fetch('/api/categories');
				const data = await response.json();
				setCategories(data);

			} catch (error) {
				console.error('Failed to fetch categories:', error);
				setCategories([]);
			}
		}

		fetchCategories();
	}, []);

	const formSubmit = async (data) => {
		const formData = new FormData();

		Object.keys(data).forEach((key) => {
			if (key === 'images' && data[key].length > 0) {
				Array.from(data[key]).forEach((file) =>
					formData.append(key, file),
				); // Append each file separately
			} else {
				formData.append(key, data[key]);
			}
		});

		//console.log
		for (let [key, value] of formData.entries()) {
			console.log(key, value);
		}

		await addProduct(formData);
	};

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
				<label htmlFor='priceInCents'>Price In Cents</label>
				<input
					type='number'
					id='priceInCents'
					name='priceInCents'
					className={styles.productFormInput}
					{...register('priceInCents')}
				/>
				{errors && (
					<span className={styles.errorMessage}>
						{errors.priceInCents?.message}
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
					{categories.map((category) => (
						<option key={category.id} value={category.name}>
							{formatCategoryName(category.name)}
						</option>
					))}
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
					multiple
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

				<button type='submit' disabled={isSubmitting}>
					SAVE
				</button>
			</div>
		</form>
	);
}
