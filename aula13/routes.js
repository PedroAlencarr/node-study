const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");

// function meuMiddleware(req, res, next) {
//   console.log();
//   console.log("Passei pelo middleware");
//   console.log();
//   next(); // Chama o próximo middleware ou rota
// }

// Rotas da home
// route.get("/", meuMiddleware, homeController.paginaInicial);
route.get("/", homeController.paginaInicial);
route.post("/", homeController.tratarPost);

// Rotas de contato
route.get("/contato", contatoController.paginaInicial);

module.exports = route;
