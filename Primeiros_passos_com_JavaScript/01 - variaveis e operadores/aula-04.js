const peso = 194;
const altura = 1.60;

const imc = peso / Math.pow(altura, 2);

console.log(imc.toFixed(2));

if (imc < 18.5) {
  console.log(`Seu IMC  é ${imc.toFixed(2)}, você está abaixo do peso`);
} else if (imc >= 18.5 && imc <= 25) {
  console.log(`Seu IMC  é ${imc.toFixed(2)}, você está peso normal`);
} else if (imc >= 25 && imc <= 30) {
  console.log(`Seu IMC  é ${imc.toFixed(2)}, você está acima do peso`);  
} else if (imc >= 30 && imc <= 40) {
  console.log(`Seu IMC  é ${imc.toFixed(2)}, você está obeso`);  
} else {
  console.log(`Seu IMC  é ${imc.toFixed(2)}, você está obesidade grave`);
}