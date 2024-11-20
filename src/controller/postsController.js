import { buscarPostPorID, getTodosOsPosts } from "../models/postsModels.js";


// Função com o método GET para pegar todos os registros de posts do banco de dados
export async function listarPosts(req, res){
    const posts = await getTodosOsPosts();
    res.status(200).json(posts);
};


// : funciona como a declaração de uma variável
export async function getPostPorID(req,res){
    const post = await buscarPostPorID(req.params.id);
    res.status(200).json(post);
};