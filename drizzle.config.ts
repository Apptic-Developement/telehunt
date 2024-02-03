import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schemas/",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  strict: true,
  verbose: true,
} satisfies Config;
