import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req , res ) =>{
    res.render("index.ejs");
});

app.post("/calcular",(req, res ) =>{
const tamanhoSenha = req.body["tamanho_senha"];
const caracteres = "ABCDEFGHJKLMNOPQRSTUVWXYVacdefghijklmnopqrstuvwxyv!@#$%¨&*;"

let senha = "";
for (let i = 0 ;i < tamanhoSenha; i++){
senha += caracteres[Math.floor(Math.random() * caracteres.length)];
}

res.render("index.ejs",{senha: senha});
});

app.listen(port,()=>{
    console.log(`Server Listening on port ${port}`);
})