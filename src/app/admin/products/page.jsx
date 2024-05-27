import styles from './page.module.css';
import ProductsTable from './_components/ProductsTable';
import { getProducts } from '@/app/api/dbFunctions/user/db';

async function fetchProducts(){
	const products = await getProducts();
	return products
}


export default async function AdminProductsPage() {
	const products = await fetchProducts();

	return (
		<div className={styles.adminProductPage}>
			<div className={styles.adminProductPageHeader}>
				<h1>Products</h1>
				<button className={styles.addProductButton}>
					<a
						href='/admin/products/new'
						className={styles.addProductLink}>
						ADD PRODUCT
					</a>
				</button>
			</div>

			<div style={{ width: '100%' }}>
				<ProductsTable products={products}/>
			</div>
		</div>
	);
}
