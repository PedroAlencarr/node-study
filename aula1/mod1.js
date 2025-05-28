// const nome = "Pedro";
// const sobrenome = "Alencar";

// const falaNome = () => `Meu nome é ${nome} ${sobrenome}`;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = "Qualquer coisa"; //nao e tao usado, mas o this se refere ao module.exports

// console.log(module.exports);

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // falaNome() {
  //   return `Meu nome é ${this.nome} ${this.sobrenome}`;
  // }
}

exports.Pessoa = Pessoa; //exporta a classe
