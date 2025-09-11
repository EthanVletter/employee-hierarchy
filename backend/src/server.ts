import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import employeeRoutes from "./routes/employeeRoutes";
import { pool } from "./db/pool";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();

// console.log("process.env.FRONTEND_URL: ", process.env.FRONTEND_URL);

const allowedOrigins = [
  "http://localhost:5173", // local dev
  "http://localhost:4173", // local dev
  process.env.FRONTEND_URL, // production frontend
];

// Allow CORS (adjust depending on frontend deploy URL)

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow non-browser requests like Postman

      // allow if in allowedOrigins OR if it contains Render preview domain
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith(".onrender.com") // any Render URL, including previews
      ) {
        callback(null, true);
      } else {
        callback(new Error(`CORS policy does not allow access from ${origin}`));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

// Run init.sql on startup
async function ensureDB() {
  try {
    const sqlPath = path.join(process.cwd(), "src", "db", "init.sql");
    const sql = fs.readFileSync(sqlPath, "utf-8");
    await pool.query(sql);
    console.log("DB initialized");
  } catch (err) {
    console.error("DB init error:", err);
  }
}

ensureDB();

app.use("/employees", employeeRoutes);

// Render provides PORT automatically
const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
