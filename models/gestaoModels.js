import conectarBanco from "../config/database.js";
import { ObjectId } from "mongodb";

export async function cadastrarAluno(dados) {
    const db = await conectarBanco();

    const resultado = await db.collection("alunos").insertOne(dados);

    return resultado;
}

export async function listarAlunos() {
    const db = await conectarBanco();

    const alunos = await db.collection("alunos").find().toArray();

    return alunos;
}

export async function buscarAlunoPorId(id) {
    const db = await conectarBanco();

    const aluno = await db.collection("alunos").findOne({
        _id: new ObjectId(id)
    });

    return aluno;
}

export async function atualizarAluno(id, dados) {
    const db = await conectarBanco();

    const resultado = await db.collection("alunos").updateOne(
        {
            _id: new ObjectId(id)
        },
        {
            $set: dados
        }
    );

    return resultado;
}

export async function excluirAluno(id) {
    const db = await conectarBanco();

    const resultado = await db.collection("alunos").deleteOne({
        _id: new ObjectId(id)
    });

    return resultado;
}
