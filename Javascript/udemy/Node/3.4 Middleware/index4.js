// 1. IMPORTAÇÃO DE MÓDULOS (As ferramentas que vamos usar)
import express from "express"; // O framework para criar o servidor e gerenciar rotas
import bodyParser from "body-parser"; // O tradutor que entende os dados vindos de formulários
import { dirname } from "path"; // Ferramenta para manipular caminhos de pastas
import { fileURLToPath } from "url"; // Ferramenta para converter URLs de arquivos em caminhos reais

// 2. CONFIGURAÇÃO DO DIRETÓRIO (O "GPS" do servidor)
// Como o ES6 (import) não tem a variável __dirname nativa, 
// usamos essas duas linhas para descobrir em qual pasta este arquivo .js está salvo.
const __dirname = dirname(fileURLToPath(import.meta.url));

// 3. INICIALIZAÇÃO DO APP
const app = express(); // Cria uma instância do servidor Express
const port = 3000; // Define a "porta" (o canal) onde o servidor vai rodar
var bandName = ""; // Variável global para guardar o nome da banda gerado

// 4. MIDDLEWARES (Os processos intermediários)

// Este middleware do body-parser prepara os dados do formulário HTML.
// Sem ele, o servidor recebe os dados mas não consegue ler o que está dentro.
app.use(bodyParser.urlencoded({ extended: true }));

// Este é o SEU middleware personalizado (bandNameGenerator).
// Ele intercepta a requisição ANTES dela chegar na rota final.
function bandNameGenerator(req, res, next) {
  console.log(req.body); // Mostra no terminal os dados que o usuário enviou
  
  // Pega o valor do campo "street" e "pet" do formulário e junta na variável
  bandName = req.body["street"] + req.body["pet"]; 
  
  // O next() é obrigatório! Ele diz ao Express: "Terminei minha parte, pode seguir para a rota".
  next();
}

// Ativa o seu middleware para que ele rode em todas as requisições
app.use(bandNameGenerator);

// 5. ROTAS (Os caminhos que o usuário pode acessar)

// ROTA GET: Quando o usuário digita o site no navegador (URL raiz "/")
app.get("/", (req, res) => {
  // O servidor envia o arquivo HTML que está na pasta public
  res.sendFile(__dirname + "/public/index.html");
});

// ROTA POST: Quando o usuário clica no botão "Submit" do formulário
app.post("/submit", (req, res) => {
  // O servidor envia uma resposta de texto/HTML com o nome da banda já processado pelo middleware
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

// 6. LIGANDO O SERVIDOR
app.listen(port, () => {
  // Exibe uma mensagem no console avisando que a "fábrica" está aberta e funcionando
  console.log(`Listening on port ${port}`);
});