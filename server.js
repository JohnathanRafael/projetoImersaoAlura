import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Servidor express
const app = express();

//deixar a pasta uploads pública
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => {
    console.log("Servidor escutando ...");
});


