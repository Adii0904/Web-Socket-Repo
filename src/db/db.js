import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
dotenv.config();

import pg from "pg";

if (process.env.DATABASE_URL) {
  throw new Error("databse string is not define in the env");
}

// connecting the server pg sql from the server;

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
