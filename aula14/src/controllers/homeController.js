exports.paginaInicial = (req, res) => {
  // Rota raiz
  res.render("index");
  return;
};

exports.tratarPost = (req, res) => {
  res.send(req.body);
  return;
};
