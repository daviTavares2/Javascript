import express from "express";
import  {dirname} from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req, res ) =>{
    res.render("index.ejs");
})

app.post("/calcular", (req,res)=>{
    const dolar = 0.20;
    const euro =  0.18;
    const reais = req.body["reais"];
    
    const data ={
        reais: reais,
        r_dolar : reais * dolar,
        r_euro  : reais * euro,
    };
    res.render("index.ejs",data );
})

app.listen(port,() =>{
    console.log(`listening on port ${port}`);
})