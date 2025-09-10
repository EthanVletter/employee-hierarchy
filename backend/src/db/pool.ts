import pkg from "pg";
const { Pool } = pkg;
// import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

// db/pool.ts or wherever you configure pg pool
export const pool = new Pool({
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  host: process.env.DB_HOST || "employee-hierarchy-db", // use service name
  database: process.env.DB_NAME || "employee_hierarchy",
  port: Number(process.env.DB_PORT || 5432),
});
