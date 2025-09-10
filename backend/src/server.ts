import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import employeeRoutes from "./routes/employeeRoutes";
import { pool } from "./db/pool";
import fs from "fs";
import path from "path";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

// Run init.sql on startup
async function ensureDB() {
  try {
    const sql = fs.readFileSync(
      path.join(__dirname, "db", "init.sql"),
      "utf-8"
    );
    await pool.query(sql);
    console.log("DB initialized");
  } catch (err) {
    console.error("DB init error:", err);
  }
}

ensureDB();

app.use("/employees", employeeRoutes);

const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
