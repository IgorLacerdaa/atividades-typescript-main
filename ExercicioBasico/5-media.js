/**
 * Exercício 05 – Média de Notas
 * Calcule a média de 3 notas e diga se Aprovado (>=6) ou Reprovado.
 */
var n1 = 9;
var n2 = 4;
var n3 = 9;
var media = (n1 + n2 + n3) / 3;
console.log("M\u00E9dia: ".concat(media.toFixed(2)));
if (media >= 6) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}
