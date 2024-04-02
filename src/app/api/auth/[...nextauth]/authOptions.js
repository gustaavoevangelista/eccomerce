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
					console.log(user);
					return user;
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
		strategy: 'jwt',
	},

	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.email = user.email

			}
			return token;
		},
		async session ( session, token ){
			if(session?.user) {
				session.user.email = token.email
			}
			return session
		},
	},
};
