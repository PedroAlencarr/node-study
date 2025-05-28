// const multiplicacao = require("./mod");

// console.log(multiplicacao(2, 3));

// const Cachorro = require("./mod");
// const cachorro1 = new Cachorro("Rex");
// console.log(cachorro1.nome);
// cachorro1.latir();
const cachorro = require("./mod");
const cachorrinho = new cachorro("Rex");
cachorrinho.latir();

console.log(__filename); // __filename é o caminho completo do arquivo
console.log(__dirname); // __dirname é o caminho completo da pasta

const path = require("path"); // path é um módulo nativo do Node.js e aqui estamos importando ele
console.log(path.resolve(__dirname, "..", "..")); // __dirname é o caminho completo da pasta atual, ".." sobe um nível e ".." sobe mais um nível
