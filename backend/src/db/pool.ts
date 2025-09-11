import pkg from "pg";
const { Pool } = pkg;
// import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

// console.log("__dirname:", __dirname);
// console.log("DB_USER:", process.env.DB_USER);
// console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
// console.log("DB_HOST:", process.env.DB_HOST);
// console.log("DB_NAME:", process.env.DB_NAME);
// console.log("DB_PORT:", process.env.DB_PORT);

// db/pool.ts or wherever you configure pg pool
export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST || "localhost", // use service name
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});
