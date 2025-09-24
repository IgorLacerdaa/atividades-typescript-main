/**
 * Exercício 12 – Função juros simples
 * Valor Final = Capital + (Capital * Taxa * Tempo)
 */
function jurosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo);
}
console.log("VF = R$ ".concat(jurosSimples(1000, 0.05, 12).toFixed(2)));
