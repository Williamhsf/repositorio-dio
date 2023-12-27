// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());
let resultado = buscaSequencial(valor, elementos);

//TODO: Retorne o valor do elemento no Array junto de sua respectiva posição


// Função para realizar busca sequencial
function buscaSequencial(valor, elementos) {
    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i] === valor) {
            return `Achei ${valor} na posicao ${i + 0}`;
        }
    }
    return `Numero ${valor} nao encontrado!`;
}

// Chamada da função e exibição do resultado
print(resultado);