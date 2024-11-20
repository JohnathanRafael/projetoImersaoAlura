import express from "express";
import { listarPosts, getPostPorID } from "../controller/postsController.js";

const routes = (app) =>{
    // Indica para o express que ele deve usar Json nas requisições
    app.use(express.json());

    // rota para pegar todos os posts 
    app.get("/posts", listarPosts);

    // rota para buscar um post por ID
    app.get("/posts/:id", getPostPorID);
}


export default routes;
