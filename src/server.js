import express from "express";
import cors from "cors";
import config from "./config/dotenv.js";
import rugcheckRoutes from "./routes/mcRugCheck.routes.js";

const app = express();
const PORT = config.port;

// Middleware
app.use(cors());
app.use(express.json());

// Rotas
app.use("/", rugcheckRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
