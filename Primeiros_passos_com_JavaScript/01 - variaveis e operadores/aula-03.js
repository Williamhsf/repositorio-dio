const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
  console.log(`Sua média é ${media.toFixed(2)}, portanto reprovado`);
} else if (media >= 5 && media <= 7) {
  console.log(`Sua média é ${media.toFixed(2)}, portanto recuperação`);
} else {
  console.log(`Sua média é ${media.toFixed(2)}, portanto aprovado`);
} 