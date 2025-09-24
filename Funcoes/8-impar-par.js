/**
 * Exercício 08 – Função par ou ímpar
 * Criar uma função que receba um número e diga se é par ou ímpar.
 */
function parOuImpar(n) {
    if (n % 2 === 0) {
        return "Par";
    }
    else {
        return "Ímpar";
    }
}
console.log("7 \u00E9 ".concat(parOuImpar(7)));
