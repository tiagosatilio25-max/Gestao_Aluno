import conectarBanco from "../config/database.js";

export async function cadastrarAluno(dados){
    const db = await conectarBanco();

    const resultado = await db.collection("dados").insertOnde(dados);

    return resultado;
}

export async function listarAlunos(){
    const db = await conectarBanco();

    const dados = await db.collection("dados").find().toArray();

    return dados;
}