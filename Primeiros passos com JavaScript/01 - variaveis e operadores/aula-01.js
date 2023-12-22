const precoCombustivel = 5.79;
const kmPorLitro = 10; 
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitro;
const valorGasto = precoCombustivel * litrosConsumidos


console.log(valorGasto.toFixed(2));
