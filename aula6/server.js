const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    "<form action='/' method='POST'> <input type='text' name='nome' placeholder='Nome' /> <input type='text' name='email' placeholder='Email' /> <button type='submit'>Enviar</button> </form>"
  );
});

app.post("/", (req, res) => {
  res.send("recebido com sucesso");
});

app.get("/contato", (req, res) => {
  res.send("Obrigado por entrar em contato!");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
  console.log("Server is running on port 3000");
});
