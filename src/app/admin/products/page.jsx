import styles from "./page.module.css"
import { DataGrid } from '@mui/x-data-grid';

const rows = [
	{
		id: 1,
		col1: 'Teste',
		col2: true,
		col3: 'Hello',
		col4: 'World',
		col5: 19,
		col6: 'Random Category',
	},
	{
		id: 2,
		col1: 'Teste',
		col2: false,
		col3: 'Hello',
		col4: 'World',
		col5: 19,
		col6: 'Random Category',
	},
	{
		id: 3,
		col1: 'Teste',
		col2: true,
		col3: 'Hello',
		col4: 'World',
		col5: 19,
		col6: 'Random Category',
	},
	{
		id: 4,
		col1: 'Teste',
		col2: true,
		col3: 'Hello',
		col4: 'World',
		col5: 19,
		col6: 'Random Category',
	}
];

const columns = [
	{ field: 'col1', headerName: 'Image', width: 100 },
	{ field: 'col2', headerName: 'Name', width: 150 },
	{ field: 'col3', headerName: 'Active', width: 100 },
	{ field: 'col4', headerName: 'Price', width: 150 },
	{ field: 'col5', headerName: 'Stock', width: 100 },
	{ field: 'col6', headerName: 'Category', width: 150 },
];

export default function AdminProductsPage() {
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
