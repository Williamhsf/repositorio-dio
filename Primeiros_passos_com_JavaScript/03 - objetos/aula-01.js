const pessoa = {
  nome: 'William Henrique',
  idade: 33,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
  }
};

console.log(pessoa['idade']);

pessoa['nome'] = 'teste';

console.log(pessoa['nome']);