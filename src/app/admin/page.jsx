import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import AdminCard from '../components/AdminCard/adminCard';
import styles from './page.module.css';
import { formatCurrency, formatNumber } from '../lib/formatters';
import prisma from '@/db';

async function getOrderData() {
	const data = await prisma.order.aggregate({
		_count: true,
		_sum: { pricePaidInCents: true },
	});

	await wait(1000); // give time to db load

	return {
		totalAmount: (data._sum.pricePaidInCents || 0) / 100, //display amount in euros,
		totalOrders: data._count,
	};
}

function wait(duration) {
	return new Promise((resolve) => setTimeout(resolve, duration));
}

async function getCustomerData() {
	const [userCount, orderData] = await Promise.all([
		prisma.user.count(),
		prisma.order.aggregate({
			_sum: { pricePaidInCents: true },
		}),
	]);

	return {
		userCount,
		averageValue:
			userCount === 0
				? 0
				: (orderData._sum.pricePaidInCents || 0) / userCount / 100,
	};
}

async function getProductData() {
	const [productCount, productsActive] = await Promise.all([
		prisma.product.count(),
		prisma.product.count({
			where: { isAvailable: true },
		}),
	]);

	return { productCount, productsActive };
}

export default async function Admin() {
	const [sessionData, orderData, customerData, productData] =
		await Promise.all([
			getServerSession(authOptions),
			getOrderData(),
			getCustomerData(),
			getProductData(),
		]);

	return (
		<div className={styles.adminPage}>
			<h1>Welcome {sessionData.session.user.email}</h1>
			<div className={styles.cards}>
				<AdminCard
					title='Orders'
					subtitle={`Total orders: ${formatNumber(
						orderData.totalOrders,
					)}`}
					body={`Total amount: ${formatCurrency(
						orderData.totalAmount,
					)}`}
				/>
				<AdminCard
					title='Customers'
					subtitle={`Total customers: ${formatNumber(
						customerData.userCount,
					)}`}
					body={`Average order value: ${formatCurrency(
						customerData.averageValue,
					)}`}
				/>
				<AdminCard
					title='Products'
					subtitle={`Total products: ${formatNumber(
						productData.productCount,
					)}`}
					body={`Active products: ${formatNumber(
						productData.productsActive,
					)}`}
				/>
			</div>
		</div>
	);
}
