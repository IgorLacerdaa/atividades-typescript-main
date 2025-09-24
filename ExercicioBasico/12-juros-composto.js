/**
 * Exercício 12 – Juros Compostos
 * Valor Final = Capital * (1 + Taxa) ^ Tempo
 * Taxa em decimal (ex.: 5% = 0.05).
 */
function jurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow(1 + taxa, tempo);
}
// Exemplo:
var capitalC = 1000;
var taxaC = 0.05;
var tempoC = 12;
var vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);
console.log("Juros compostos -> VF: R$ ".concat(vfCompostos.toFixed(2)));
