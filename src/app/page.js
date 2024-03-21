import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>HOME</h1>
			<Link href="/admin">click here to admin page</Link>
			<Link href="/login">click here to login page</Link>
			<Link href="/signup">click here to `signup` page</Link>
		</main>
	);
}
