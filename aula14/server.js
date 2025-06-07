require("dotenv").config(); // Carrega as variáveis de ambiente do arquivo .env

const express = require("express");
const app = express();
const mongoose = require("mongoose"); // Importa o mongoose para interagir com o MongoDB

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Conectado ao MongoDB com sucesso!");
    app.emit("ready"); // Emite o evento 'ready' quando a conexão for bem-sucedida
  })
  .catch((err) => {
    console.error("Erro ao conectar ao MongoDB:", err);
  }); // Conecta ao MongoDB usando a string de conexão

const routes = require("./routes"); // Importa as rotas definidas no arquivo routes.js
const path = require("path"); // Importa o módulo path para manipulação de caminhos
const middleware = require("./src/middlewares/middleware"); // Importa o middleware global
// const { middlewareGlobal } = require("./src/middlewares/middleware"); // Importa o middleware global de outra forma

app.use(express.urlencoded({ extended: true })); // Middleware para analisar dados de formulários
app.use(express.static(path.resolve(__dirname, "public"))); // Middleware para servir arquivos estáticos

app.set("view engine", "ejs"); // Define o EJS como motor de visualização
// app.set("views", "./src/views"); // Define o diretório das views
app.set("views", path.resolve(__dirname, "src", "views")); // Define o diretório das views
app.use(middleware); // Usa o middleware global
app.use(routes); // Usa as rotas definidas

app.on("ready", () => {
  // Evento 'ready' para iniciar o servidor após a conexão com o MongoDB
  app.listen(3000, () => {
    // Inicia o servidor na porta 3000
    console.log("http://localhost:3000");
    console.log("Server is running on port 3000");
  });
});
