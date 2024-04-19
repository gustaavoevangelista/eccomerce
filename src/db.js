import { PrismaClient } from '@prisma/client';

// export const prisma = new PrismaClient({
// 	log: [
// 		'query'
// 	]
// });

let prisma;

if (process.env.NODE_ENV === 'production') {
	prisma = new PrismaClient();
} else {
	if (!global.prisma) {
		global.prisma = new PrismaClient({ log: ['query'] });
	}
	prisma = global.prisma;
}

export default prisma;

	
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