exports.paginaInicial = (req, res) => {
  // Rota raiz
  res.render("index");
};

exports.tratarPost = (req, res) => {
  res.send(`<h1>Formulário enviado com sucesso!</h1>`);
};
