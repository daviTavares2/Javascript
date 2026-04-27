import express from "express"; // Importa o framework Express para gerenciar rotas e o servidor
import bodyParser from "body-parser"; // Importa o middleware para processar dados enviados no corpo da requisição (formulários)
import { dirname } from "path"; // Importa a função para lidar com caminhos de diretórios
import { fileURLToPath } from "url"; // Importa a função para converter URLs de arquivos em caminhos de sistema

// Configuração para obter o caminho do diretório atual (necessário quando usamos ES Modules "import")
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express(); // Inicializa o aplicativo Express
const port = 3000; // Define a porta onde o servidor vai rodar

var userIsAuthorised = false; // Variável global para rastrear se o usuário está autorizado

// Middleware do body-parser para capturar dados de formulários HTML (URL encoded)
app.use(bodyParser.urlencoded({ extended: true }));

// Função de Middleware personalizada para verificar a senha
function passwordCheck(req, res, next) {
  const password = req.body["password"]; // Pega o valor do campo "password" enviado pelo formulário
  if (password === "ILoveProgramming") {
    userIsAuthorised = true; // Se a senha estiver correta, autoriza o usuário
  }
  next(); // Passa o controle para a próxima função/rota
}

// Aplica o middleware de verificação em todas as requisições
app.use(passwordCheck);

// Rota Principal: Envia o arquivo HTML inicial (o formulário de login)
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Rota de Verificação: Decide o que mostrar após o envio do formulário
app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html"); // Se autorizado, mostra a página secreta
  } else {
    res.redirect("/"); // Se não, redireciona de volta para a página inicial
  }
});

// Inicia o servidor na porta 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});