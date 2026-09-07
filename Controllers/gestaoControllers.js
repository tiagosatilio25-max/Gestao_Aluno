import {
  cadastrarAluno as cadastrarAlunoModel,
  listarAlunos as listarAlunosModel,
  buscarAlunoPorId,
  atualizarAluno,
  excluirAluno,
} from "../models/gestaoModels.js";

import { ObjectId } from "mongodb";

export async function cadastrarAluno(req, res) {
  try {
    const { nome, idade, email, curso, turma } = req.body;

    if (!nome || !idade || !email || !curso || !turma) {
      return res.status(400).json({
        mensagem: "Todos os campos são obrigatórios",
      });
    }

    const dados = {
      nome,
      idade,
      email,
      curso,
      turma,
      situacao: "ativo",
      dataCadastro: new Date(),
    };

    const resultado = await cadastrarAlunoModel(dados);

    res.status(201).json({
      mensagem: "Aluno cadastrado com sucesso!",
      id: resultado.insertedId,
      dados,
    });
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: "Erro ao cadastrar aluno",
    });
  }
}

export async function listarAlunos(req, res) {
  try {
    const dados = await listarAlunosModel();

    res.status(200).json(dados);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: "Erro ao buscar alunos",
    });
  }
}

export async function buscarAluno(req, res) {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        mensagem: "ID inválido",
      });
    }

    const aluno = await buscarAlunoPorId(id);

    if (!aluno) {
      return res.status(404).json({
        mensagem: "Aluno não encontrado",
      });
    }

    res.status(200).json(aluno);
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: "Erro ao buscar aluno",
    });
  }
}

export async function editarAluno(req, res) {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        mensagem: "ID inválido",
      });
    }

    const dados = req.body;

    const resultado = await atualizarAluno(id, dados);

    if (resultado.matchedCount === 0) {
      return res.status(404).json({
        mensagem: "Aluno não encontrado",
      });
    }

    const alunoAtualizado = await buscarAlunoPorId(id);

    res.status(200).json({
      mensagem: "Aluno atualizado com sucesso!",
      aluno: alunoAtualizado,
    });
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: "Erro ao atualizar aluno",
    });
  }
}

export async function removerAluno(req, res) {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        mensagem: "ID inválido",
      });
    }

    const resultado = await excluirAluno(id);

    if (resultado.deletedCount === 0) {
      return res.status(404).json({
        mensagem: "Aluno não encontrado",
      });
    }

    res.status(200).json({
      mensagem: "Aluno excluído com sucesso!",
    });
  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      mensagem: "Erro ao excluir aluno",
    });
  }
}
