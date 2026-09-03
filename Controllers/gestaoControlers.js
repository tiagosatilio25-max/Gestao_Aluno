import { cadastrarAluno, listarAlunos } from "../models/gestaoModels";

export async function cadastrarAluno(req,res) {
    try{
        const {nome, idade, email, curso, turma} = req.body;

        if (!nome || !idade || !email || !curso || !turma){
            return res.status(400).json({
                mensagem: "Todos os campos são origatórios"
            });
        }

        const dados = {
            nome,
            idade,
            email,
            curso,
            turma,
            situacao: "ativo",
            dataCadastro: new Date()
        };

        const resultado = await cadastrarAluno(dados);

        res.status(201).json({
            mensagem: "Aaluno cadastrado com sucesso!",
            id: resultado.insertedId,
            dados
        });
    }catch (erro){
        console.erroe(erro);

        res.status(500).json({
            mensagem: "Erro ao cadastrar aluno"
        });
    }
}

