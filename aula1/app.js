// const mod1 = require("./mod1.js");
// // const falaNome = require("./mod1.js").falaNome;
// // const falaNome = mod1.falaNome; //outra forma de importar a funcao
// // const { nome, sobrenome } = mod1; //desestruturar o objeto
// const { nome, sobrenome, falaNome } = require("./mod1"); //desestruturar o objeto
// console.log(mod1.falaNome());
// console.log(falaNome());
// console.log(nome, sobrenome);
const path = require("path"); //importa o modulo path sem precisar instalar ou sem colocar caminho absoluto pq e do node mesmo (esta na pasta noide_modules)
const axios = require("axios"); //importa o modulo axios, que e uma biblioteca de http, mas precisa instalar com npm install axios
const { Pessoa } = require("./mod1"); //importa a classe

const p1 = new Pessoa("Pedro", "Alencar"); //instancia a classe
console.log(p1);

axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then((response) => response.data) //pega o dado da resposta
  .catch((e) => console.log(e)); //faz uma requisicao http para o site e imprime o resultado no console
