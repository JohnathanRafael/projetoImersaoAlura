import fs from "fs";
import { buscarPostPorID, getTodosOsPosts, criarPost, editarPost } from "../models/postsModels.js";
import gerarDescricaoComGemini from "../services/geminiService.js"


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

// função com o mêtodo post para salvar um novo post no banco de dados
export async function postarNovoPost(req, res) {
    const novoPost = req.body; 
    try{
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch(error){
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição."});
    }
};

// função com o mêtodo post para salvar uma nova imagem no servidor
export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try{
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        fs.renameSync(req.file.path, imagemAtualizada);
        res.status(200).json(postCriado);
    } catch(error){
        console.error(error.message);
        res.status(500).json({"Erro": "Falha na requisição."});
    }
    };


    //função para editar um post
    export async function editarNovoPost(req, res) {
        const id = req.params.id; 
        const urlImagem = `http://localhost:3000/${id}.png`;

        try{
            const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
            const descricao = await gerarDescricaoComGemini(imgBuffer);

            const postAtualizado = {
                imgUrl: urlImagem,
                descricao: descricao,
                alt: req.body.alt
            };

            const postCriado = await editarPost(id, postAtualizado);
            res.status(200).json(postCriado);
        } catch(error){
            console.error(error.message);
            res.status(500).json({"Erro": "Falha na requisição."});
        }
    };