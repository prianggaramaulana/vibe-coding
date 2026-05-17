import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  .get("/", () => ({
    message: "Welcome to Elysia + Drizzle + MySQL API!",
    status: "healthy",
  }))
  .get("/users", async () => {
    try {
      const allUsers = await db.select().from(users);
      return {
        success: true,
        data: allUsers,
      };
    } catch (error) {
      return {
        success: false,
        message: "Failed to fetch users. Ensure your MySQL server is running and the 'users' table exists.",
        error: String(error),
      };
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
