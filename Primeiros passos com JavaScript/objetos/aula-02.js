class Pessoa {
  nome;
  idade;

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
  }
}

// reatribuir pessoa e idade
const vitor = new Pessoa();
vitor.nome = 'Vitor Guerra';
vitor.idade = 25;

const renan = new Pessoa();
renan.nome = 'renan paula';
renan.idade = 30;

console.log(vitor);
console.log(renan);

vitor.descrever();
renan.descrever();