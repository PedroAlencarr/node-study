const fs = require("fs").promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: "w" });
};

// fs.writeFile(caminhoArquivo, json, {
//   flag: "w",
//   // flag: "a",
//   // encoding: "utf-8",
// });
