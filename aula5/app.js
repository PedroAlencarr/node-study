const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "teste.json");
const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

const pessoas = [
  { nome: "Pedro" },
  { nome: "João" },
  { nome: "Maria" },
  { nome: "Ana" },
  { nome: "Lucas" },
  { nome: "Luana" },
  { nome: "Fernanda" },
  { nome: "Roberto" },
  { nome: "Juliana" },
  { nome: "Carlos" },
];

const json = JSON.stringify(pessoas, null, 2);

escreve(caminhoArquivo, json);

async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  // return dados;
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach((val) => console.log(val));
  dados.forEach((val) => console.log(val.nome));
}

lerArquivo(caminhoArquivo);

// const dadosArquivo = lerArquivo(caminhoArquivo).then((dados) =>
//   console.log(dados)
// );

// dadosArquivo;
