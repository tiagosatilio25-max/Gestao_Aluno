import express from "express";

import {
    cadastrarAluno,
    listarAlunos,
    buscarAluno,
    editarAluno,
    removerAluno
} from "../Controllers/gestaoControllers.js";

const router = express.Router();

router.post("/alunos", cadastrarAluno);

router.get("/alunos", listarAlunos);

router.get("/alunos/:id", buscarAluno);

router.put("/alunos/:id", editarAluno);

router.delete("/alunos/:id", removerAluno);

export default router;
