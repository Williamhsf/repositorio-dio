// Leitura do número N
let N = parseInt(gets());

// Inicialização da variável de somatório
let somatorio = 0;

// Loop para somar os números de N até 0
for (let i = N; i >= 0; i--) {
    somatorio += i;
}

// Impressão do resultado
print(somatorio);