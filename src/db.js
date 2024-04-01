import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
	log: [
		'query'
	]
});

// export async function createUser(email, password) {
// 	const user = await prisma.user.create({
// 		data: {
// 			email:"gustavo@mail.pt",
// 			password:"password",
// 		},
// 	});
// 	console.log('Created user:', user);
// }

// createUser()
// 	.catch((e) => {console.error(e)});
	
// import mysql from 'mysql'

// const db = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'd-linkk71',
// 	database: 'mydb'
// })

// db.connect(err =>{
// 	if(err){
// 		console.error("Error connecting to MYSQL database: ", err)
// 	}else{
// 		console.log("Connected to MYSQL database")
// 	}
// })

// export default db;