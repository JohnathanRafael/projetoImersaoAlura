import 'dotenv/config';
import conectarAoBanco from "../config/dbConfig.js";
import { ObjectId } from "mongodb";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
const dataBaseNome = "imersaoAlura";
const postColecao = "posts";

// função para pegar uma coleção
function getColecao(dbNome, colecaoNome){
    const db = conexao.db(dbNome); 
    return db.collection(colecaoNome); 
}

//Função para pegar todos os registros de posts
export async function getTodosOsPosts(){
    const colecao = getColecao(dataBaseNome, postColecao);
    return colecao.find().toArray();
}

// função para buscar post por ID
export async function buscarPostPorID(id){
    const colecao = getColecao(dataBaseNome, postColecao);
    const objectId = new ObjectId(id);
    return colecao.findOne({ _id: objectId }); 
};

// função para salvar um post
export async function criarPost(novoPost) {
    const colecao = getColecao(dataBaseNome, postColecao);
    return colecao.insertOne(novoPost);
};

//função para editar um post
export async function editarPost(id, novoPost) {
    const colecao = getColecao(dataBaseNome, postColecao);
    const objectId = new ObjectId(id);

    return colecao.updateOne({_id: objectId}, {$set: novoPost});
};

