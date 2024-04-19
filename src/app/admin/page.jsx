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

	await wait(1000) // give time to db load

	return {
		totalAmount: (data._sum.pricePaidInCents || 0) / 100, //display amount in euros,
		totalOrders: data._count,
	};
}

function wait (duration) {
	return new Promise(resolve => setTimeout(resolve, duration));
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
