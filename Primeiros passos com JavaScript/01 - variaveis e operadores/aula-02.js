const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = "Etanol";

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === "Etanol") {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(`Valor Etanol R$ ${valorGasto.toFixed(2)}`);
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(`Valor Gasolina R$ ${valorGasto.toFixed(2)}`);
}
