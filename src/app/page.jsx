import { getServerSession } from 'next-auth';
import styles from './page.module.css';
import Link from 'next/link';
import { authOptions } from './api/auth/[...nextauth]/authOptions';
import { prisma } from '@/db';
import { redirect } from 'next/navigation';

export default async function Home() {
	const sessionData = await getServerSession(authOptions);
	
	// const users = await prisma.user.findMany(); //testing  if the db is working

	if(!sessionData) {
		redirect('/api/auth/signin');
	}

	return (
		<>
			<main className={styles.main}>
				<h1>HOME</h1>
				<Link href='/admin'>click here to admin page</Link>
				<Link href='/login'>click here to login page</Link>
				<Link href='/signup'>click here to `signup` page</Link>
				{/* <ul>
					{users.map((user) => (
						<li key={user.id}>user email:  {user.email}</li>
					))}
				</ul> */}
				<div>
					{sessionData ? (
						<Link
							href='/api/auth/signout?callbackUrl=/'
							className={styles.sessionInfoOk}>
							You are logged in as {sessionData.session.user.email} click
							here to signout
						</Link>
					) : (
						<Link
							href='/api/auth/signin'
							className={styles.sessionInfoNotOk}>
							You are not logged in! Click here to login
						</Link>
					)}
					{/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
				</div>
			</main>
		</>
	);
}
