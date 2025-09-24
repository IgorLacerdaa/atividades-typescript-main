/**
 * Exercício 05 – Média de Notas
 * Calcule a média de 3 notas e diga se Aprovado (>=6) ou Reprovado.
 */

let n1: number = 7;
let n2: number = 5;
let n3: number = 9;

let media: number = (n1 + n2 + n3) / 3;

console.log(`Média: ${media.toFixed(2)}`);

if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}