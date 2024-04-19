import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import AdminCard from '../components/AdminCard/adminCard';
import styles from './page.module.css';
import { prisma } from '@/db';
import { formatCurrency, formatNumber } from '../lib/formatters';

async function getOrderData() {
	const data = await prisma.order.aggregate({
		_count: true,
		_sum: { pricePaidInCents: true },
	});

	return {
		totalAmount: (data._sum.pricePaidInCents || 0) / 100, //display amount in euros,
		totalOrders: data._count,
	};
}

export default async function Admin() {
	const sessionData = await getServerSession(authOptions);
	const orderData = await getOrderData();

	return (
		<div className={styles.adminPage}>
			<h1>Welcome {sessionData.session.user.email}</h1>
			<div className={styles.cards}>
				<AdminCard
					title='Orders'
					subtitle={formatNumber(orderData.totalOrders)}
					body={formatCurrency(orderData.totalAmount)}
				/>
			</div>
		</div>
	);
}
