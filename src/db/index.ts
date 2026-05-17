import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL || "mysql://root:@localhost:3306/vibe_db";

const connection = await mysql.createPool(connectionString);

export const db = drizzle(connection, { schema, mode: "default" });
