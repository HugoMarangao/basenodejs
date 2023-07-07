import express from "express";
import LivrosContoller from "../contoller/livrosController.js";

const router = express.Router();

router//lembrando que a busca deve ser da mais expecifica para menos especifica
.get("/livros", LivrosContoller.listarLivros)
.get("/livros/busca", LivrosContoller.listarLivroPorEditora)
.get("/livros/:id", LivrosContoller.listarLivroPorId)
.post("/livros", LivrosContoller.cadastrarLivro)
.put("/livros/:id",LivrosContoller.atualizarLivro)
.delete("/livros/:id",LivrosContoller.excluirLivro)
export default router;

