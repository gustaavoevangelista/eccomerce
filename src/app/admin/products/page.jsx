import prisma from "@/db";
import styles from "./page.module.css"
import { DataGrid } from '@mui/x-data-grid';

const products = await prisma.product.findMany();

const rows = products.map((product) => ({
	id: product.id,
	image: 'devolver imagem',
	name: product.name,
	isAvailable: product.isAvailable,
	price: product.priceInCents,
	category: product.categoryId,
}));

const columns = [
	{ field: 'image', headerName: 'Image', width: 100 },
	{ field: 'name', headerName: 'Name', width: 150 },
	{ field: 'isAvailable', headerName: 'Active', width: 100 },
	{ field: 'price', headerName: 'Price', width: 150 },
	{ field: 'category', headerName: 'Category', width: 150 },
];

export default async function AdminProductsPage() {
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
				<DataGrid
					rows={rows}
					columns={columns}
					initialState={{
						pagination: {
							paginationModel: { page: 0, pageSize: 5 },
						},
					}}
					pageSizeOptions={[5, 10, 15, 20]}
					checkboxSelection
					autoHeight
				/>
			</div>
		</div>
	);
}
