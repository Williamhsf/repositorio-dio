const precoEtiqueta = 100;
const formaDePagamento = 4;

// console.log(precoEtiqueta);

function aplicarDesconto(valor, desconto){
  return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor, juros){
  return (valor + (valor * (juros / 100)));
}

if (formaDePagamento === 1) {
  console.log(aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
  console.log(aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
  console.log(precoEtiqueta);
} else {
  console.log(aplicarJuros(precoEtiqueta, 10));
}


console.log(200 - (200 * 0.1));