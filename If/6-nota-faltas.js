/**
 * Exercício 06 – Nota e faltas
 * Aprovado se nota >= 7 e faltas <= 10.
 */
var materia = "Matemática";
var notaFinal = 8;
var faltas = 12;
if (notaFinal >= 7 && faltas <= 10) {
    console.log("Aprovado em ".concat(materia, "."));
}
else {
    console.log("Reprovado em ".concat(materia, "."));
}
