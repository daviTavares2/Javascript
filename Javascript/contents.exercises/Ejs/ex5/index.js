import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("index.ejs");
})

app.get("/post", (req,res)=>{
    const dados = [
        {titulo: "Meu primeiro post ", data:"05/06/2026"},
        {titulo: "Estou aprendendo Ejs  ", data:"06/06/2026"},
        {titulo: "Estou aprendendo partials usando ejs", data:"08/06/2026"},
    ];
     res.render("posta.ejs",{dadosPost: dados});
})

app.get("/sobre", (req,res)=>{
    res.render("sobre.ejs");
})

app.listen(port , ()=> {
    console.log(`Listening on Port ${port}`);
})