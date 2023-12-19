const precoEtiqueta = 100;
const formaDePagamento = 4;

console.log(precoEtiqueta);

if (formaDePagamento === 1) {
  const pagamentoDebito = precoEtiqueta * 0.1;
  console.log(precoEtiqueta - pagamentoDebito);
} else if (formaDePagamento === 2) {
  const pagamentoDinheiroPix = precoEtiqueta * 0.15;
  console.log(precoEtiqueta - pagamentoDinheiroPix);
} else if (formaDePagamento === 3) {
  const pagamentoDuasVezes = precoEtiqueta;
  console.log(pagamentoDuasVezes);
} else {
  console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}