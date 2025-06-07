module.exports = (req, res, next) => {
  // Middleware que será executado em todas as rotas
  console.log();
  console.log("Passei pelo middleware global");
  console.log();
  if (req.body && req.body.cliente) {
    console.log(`O nome enviado foi: ${req.body.cliente}`);
  }
  // Chama o próximo middleware ou rota
  next();
};
exports.middlewareGlobal = (req, res, next) => {
  next();
};
