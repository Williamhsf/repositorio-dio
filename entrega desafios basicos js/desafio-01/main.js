// Função para calcular a soma de múltiplos de A até N
function somaMultiplos(A, N) {
  let soma = 0;
  for (let i = A; i <= N; i += A) {
      soma += i;
  }
  return soma;
}

// Leitura dos valores de A e N
var a = parseInt(gets());
var N = parseInt(gets());

// Chamada da função e exibição do resultado
var resultado = somaMultiplos(a, N);
print(resultado);