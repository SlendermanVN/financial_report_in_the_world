import "dotenv/config";

interface Config {
  PORT: number;
  NODE_ENV: "development" | "production";
}

const config: Config = {
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3001,
  NODE_ENV: (process.env.NODE_ENV as "development" | "production") || "development",
}

if (!config.PORT) {
  throw new Error("PORT is not defined in environment variables");
}

export default config;