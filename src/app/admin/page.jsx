import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import AdminCard from '../components/AdminCard/adminCard'

export default async function Admin() {
	const sessionData = await getServerSession(authOptions);

	return (
		<>
			<h1>Welcome {sessionData.session.user.email}</h1>
			<AdminCard/>
			
		</>
	);
}
