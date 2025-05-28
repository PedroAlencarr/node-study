const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true })); // Middleware para analisar dados de formulários

app.get("/", (req, res) => {
  // Rota raiz
  res.send(
    "<form action='/' method='POST'> <input type='text' name='nome' placeholder='Nome' /> <input type='text' name='email' placeholder='Email' /> <button type='submit'>Enviar dados</button> </form>"
  );
});

app.post("/", (req, res) => {
  // Rota para receber dados do formulário
  console.log(req.body);
  res.send(
    `O que você enviou o nome: ${req.body.nome} - e-mail: ${req.body.email}`
  );
});

app.get("/testes/", (req, res) => {
  // Rota para testes com parâmetros de consulta
  console.log(req.params);
  console.log(req.query);
  res.send(`${req.query.nome} ${req.query.sobrenome}`);
});

app.get("/testes/:idUsuarios", (req, res) => {
  // Rota para testes com parâmetros de rota
  console.log(req.params);

  res.send(req.params.idUsuarios);
});

app.get("/contato", (req, res) => {
  // Rota de contato
  res.send("Obrigado por entrar em contato!");
});

app.listen(3000, () => {
  // Inicia o servidor na porta 3000
  console.log("http://localhost:3000");
  console.log("Server is running on port 3000");
});
