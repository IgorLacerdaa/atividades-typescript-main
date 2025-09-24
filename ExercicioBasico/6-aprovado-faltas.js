/**
 * Exercício 06 – Aprovado com faltas
 * Regra: aprovado se nota >= 7 E faltas <= 10.
 * Caso contrário, reprovado.
 */
var materia = "Matemática";
var nota = 8; // experimente alterar
var faltas = 12; // experimente alterar
if (nota >= 7 && faltas <= 10) {
    console.log("Aprovado em ".concat(materia, " (nota: ").concat(nota, ", faltas: ").concat(faltas, ")"));
}
else {
    console.log("Reprovado em ".concat(materia, " (nota: ").concat(nota, ", faltas: ").concat(faltas, ")"));
}
