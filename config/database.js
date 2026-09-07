import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

export async function conectarBanco() {
    await client.connect();

    const db = client.db("gestao_escolar");

    console.log("MongoDB conectado!");

    return db;
}

export default conectarBanco;
