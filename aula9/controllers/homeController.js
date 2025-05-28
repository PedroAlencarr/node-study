exports.paginaInicial = (req, res) => {
  // Rota raiz
  res.send(
    `<h1 style="text-align: center; font-size: 2em;">Página Inicial</h1>
     <form method="POST" style="text-align: center;">
       <input type="text" name="nome" placeholder="Digite seu nome" required style="font-size: 1.5em; margin: 10px;" />
       <input type="email" name="email" placeholder="Digite seu email" required style="font-size: 1.5em; margin: 10px;" />
       <button type="submit" style="font-size: 1.5em;">Enviar</button>
     </form>`
  );
};

exports.tratarPost = (req, res) => {
  res.send(`<h1>Formulário enviado com sucesso!</h1>`);
};
