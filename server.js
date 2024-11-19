import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto de teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Um gato adorável",
        imagem: "https://placekitten.com/200/300"
    },
    {
        id: 3,
        descricao: "Gato preguiçoso",
        imagem: "https://placekitten.com/g/200/300"
    },
    {
        id: 4,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placekitten.com/400/200"
    },
    {
        id: 5,
        descricao: "Gato olhando para a janela",
        imagem: "https://placekitten.com/300/300"
    },
    {
        id: 6,
        descricao: "Gato ronronando",
        imagem: "https://placekitten.com/200/200"
    },
    {
        id: 7,
        descricao: "Gato curioso",
        imagem: "https://placekitten.com/300/300"
    }
];

// Servidor express
const app = express();

// Indica para o express que ele deve usar Json nas requisições
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando ...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

// função para buscar post por ID
function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
};

// : funciona como a declaração de uma variável
app.get("/posts/:id", (req,res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});


