/**
 * Exercício 11 – Juros Simples
 * Valor Final = Capital + (Capital * Taxa * Tempo)
 * Taxa em decimal (5% = 0.05).
 */
function jurosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo);
}
// Exemplo:
var capital = 1000;
var taxa = 0.05;
var tempo = 12;
var vfSimples = jurosSimples(capital, taxa, tempo);
console.log("Juros simples -> VF: R$ ".concat(vfSimples.toFixed(2)));
