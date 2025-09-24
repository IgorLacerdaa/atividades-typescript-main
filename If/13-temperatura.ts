/**
 * Exercício 13 – Temperatura
 * Frio (<15), Agradável (15–25), Quente (>25).
 */

let temperatura: number = 28;

if (temperatura < 15) {
  console.log("Está frio.");
} else if (temperatura <= 25) {
  console.log("Clima agradável.");
} else {
  console.log("Está quente.");
}