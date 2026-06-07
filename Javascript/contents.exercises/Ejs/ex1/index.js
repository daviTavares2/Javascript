import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();

app.get("/",(req,res)=>{
    res.render("index.ejs",{
        nome:"Davi",
        idade:28,
        profissao: "Desenvolvedor",
        hobbies: ["programar","jogar","cozinhar"],
        premium : true
    });
    
})

app.listen(port,()=>{
    console.log( `Listening on port ${port}`);
})