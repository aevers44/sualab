import mysql from "mysql";
require("dotenv").config();

let env =  process.env.NODE_ENV === "development" ? 'DEV' : 'LIVE';

const db = mysql.createPool({
  connectionLimit: 50,
  host: process.env[`DB_${env}_HOST`],
  user: process.env[`DB_${env}_USER`],
  password: process.env[`DB_${env}_PASSWORD`],
  port: process.env[`DB_${env}_PORT`],
  database: process.env[`DB_${env}_DATABASE`]
});

export default db;