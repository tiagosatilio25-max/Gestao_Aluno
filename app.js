import express from "express";
import dotenv from "dotenv";

import rotas from "./Routes/gestaoRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(rotas);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
