import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT || 3000,
  baseUrl: process.env.BASE_URL,
};
