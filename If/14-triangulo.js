/**
 * Exercício 14 – Triângulo válido
 * Verifique se 3 lados formam um triângulo.
 * Regra: cada lado < soma dos outros dois.
 */
var lado1 = 5;
var lado2 = 7;
var lado3 = 10;
if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) {
    console.log("Forma um triângulo válido.");
}
else {
    console.log("Não forma um triângulo.");
}
