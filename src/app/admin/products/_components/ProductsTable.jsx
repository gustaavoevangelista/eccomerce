'use client';

import { formatCategoryName } from '@/app/lib/formatters';
import { DataGrid } from '@mui/x-data-grid';
import Image from 'next/image';

export default function ProductsTable({ products }) {
	const rows = products.map((product) => ({
		id: product.id,
		image: product.imagePath,
		name: product.name,
		isAvailable: product.isAvailable,
		price: product.priceInCents,
		category: formatCategoryName(product.categoryName),
	}));

	const columns = [
		{
			field: 'image',
			headerName: 'Image',
			width: 200,
			renderCell: async (params) => {
				return (
					<Image
						src={params.value}
						alt='Product Image'
						width={50}
						height={50}
					/>
				);
			},
		},
		{ field: 'name', headerName: 'Name', width: 150 },
		{ field: 'isAvailable', headerName: 'Active', width: 100 },
		{ field: 'price', headerName: 'Price', width: 150 },
		{ field: 'category', headerName: 'Category', width: 150 },
	];
	return (
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
	);
}
