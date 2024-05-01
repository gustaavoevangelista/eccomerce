import Link from "next/link";
import styles from './AdminProductForm.module.css'


export default function AdminProductForm() {
  return (
		<form className={styles.newProductForm}>
			<div className={styles.productFormField}>
				<label htmlFor='name'>Name </label>
				<input
					type='text'
					id='name'
					name='name'
					placeholder='Enter product name'
					className={styles.productFormInput}
				/>
			</div>

			<div className={styles.productFormField}>
				<label htmlFor='description'>Description </label>
				<textarea
					id='description'
					name='description'
					rows={4}
					className={styles.productFormInput}
				/>
			</div>

			<div className={styles.productFormField}>
				<label htmlFor='price'>Price</label>
				<input
					type='number'
					id='price'
					name='price'
					className={styles.productFormInput}
				/>
			</div>

			<div className={styles.productFormField}>
				<label htmlFor='category'>Category</label>
				<select
					id='category'
					name='category'
					className={styles.productFormInput}></select>
			</div>

			<div className={styles.productFormField}>
				<label htmlFor='images'>Images</label>
				<input
					type='file'
					name='images'
					id='images'
					className={styles.productFormInput}
				/>
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
