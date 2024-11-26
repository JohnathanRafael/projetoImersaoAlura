import fs from "fs";
import { buscarPostPorID, getTodosOsPosts, criarPost, editarPost , apagarPost} from "../models/postsModels.js";
import { gerarDescricaoComGemini, gerarAltComGemini }from "../services/geminiService.js"


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
        if (!req.file) {
            return res.status(400).send('Nenhum arquivo enviado.');
        }

        try{
            const novoPost = {
                descricao: "",
                imgUrl: req.file.originalname,
                alt: ""
            };

            // insere a imagem no banco
            const postCriado = await criarPost(novoPost);

            // atualiza o nome da imagem no servidor com o id
            const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
            fs.renameSync(req.file.path, imagemAtualizada);

            //atualiza o banco com a descrição o alt e a url da imagem
            const postAtualizado = await criarObjetoParaAtualziar(postCriado.insertedId);
            const post = await editarPost(postCriado.insertedId, postAtualizado);

            res.status(200).json(post);
        } catch(error){
            console.error(error.message);
            res.status(500).json({"Erro": "Falha na requisição."});
        }
    };

    //função para editar um post
    export async function editarNovoPost(req, res) {
        const id = req.params.id; 
        
        try{
            const postAtualizado = criarObjetoParaAtualziar(id);
            const postCriado = await editarPost(id, postAtualizado);
            res.status(200).json(postCriado);
        } catch(error){
            console.error(error.message);
            res.status(500).json({"Erro": "Falha na requisição."});
        }
    };

    // função para apagar um post
    export async function deletarPost(req, res) {
        const id = req.params.id;

        try{
            const retorno = await apagarPost(id);

                // Deleta a imagem
            const imagemApagar = `uploads/${id}.png`;
            try {
                fs.unlinkSync(imagemApagar);
            } catch (err) {
                console.error(`Erro ao deletar a imagem: ${err.message}`);
                res.status(500).json({"Erro": "Falha na requisição."});
            }

            res.status(200).json(retorno);
        }catch(error){
            console.error(error.message);
            res.status(500).json({"Erro": "Falha na requisição."});
        }

    }

    // função para criar um objeto com descrição e alt gerado pelo gemini
    async function criarObjetoParaAtualziar(id){
        
        const urlImagem = `http://localhost:3000/${id}.png`;
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imgBuffer);
        const alt = await gerarAltComGemini(imgBuffer);

        return {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: alt
        };

    }
