import CredentialsProvider from 'next-auth/providers/credentials';
import { findUser } from '../../user/dbFunctions/db';
import { prisma } from '@/db';

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: 'Credentials',

			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},

			async authorize(credentials) {
				const user = await findUser(credentials.email);

				if (!user) {
					console.log('User not found');
					return null;
				}

				if (user.password === credentials.password) {
					console.log('Password is correct');
					return {
						id: user.id,
						email: user.email,
						// Add other properties as needed
					};
				} else {
					console.log('Password is incorrect');
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
	session: {
		strategy: "jwt",
	},

	callbacks: {
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token and user id from a provider.
			session.accessToken = token.accessToken;
			session.user.id = token.id;
			session.user.email = user.email;

			return session;
		},
		async jwt(token, user) {
			// Add custom JWT token data if needed

			const email = user?.email ?? 'no-email'; // here
			const dbUser = await prisma.user.findUnique({ where: { email } });

			console.log("found the email ")

			if (dbUser?.isActive === false) throw new Error('User disabled'); // we can avoid logging in in case the user is deactivated/blocked // ! we can also send null
			if (dbUser !== null) {
				// this verification is necessary
				token.id = dbUser?.id; // here
				token.email = dbUser?.email; // here also
			}
			return token;
		},
	},
};
