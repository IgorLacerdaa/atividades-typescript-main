/**
 * Exercício 06 – Função de divisão
 * Criar uma função que receba dois números e retorne a divisão.
 */
function dividir(a, b) {
    if (b === 0) {
        console.log("Erro: divisão por zero");
        return NaN;
    }
    return a / b;
}
console.log("Resultado: ".concat(dividir(20, 4)));
