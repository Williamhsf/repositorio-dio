const { gets, print } = require('./funcoes-auxiliares');

let maiorValorEncontrado = 0;

for (let i = 0; i < 10; i++) {
  const numeroSorteado = gets();
  if(numeroSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numeroSorteado;
  }
}

print(maiorValorEncontrado);