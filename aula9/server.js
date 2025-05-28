const express = require("express");
const app = express();
const routes = require("./routes"); // Importa as rotas definidas no arquivo routes.js

app.use(express.urlencoded({ extended: true })); // Middleware para analisar dados de formulários
app.use(routes); // Usa as rotas definidas

app.listen(3000, () => {
  // Inicia o servidor na porta 3000
  console.log("http://localhost:3000");
  console.log("Server is running on port 3000");
});
