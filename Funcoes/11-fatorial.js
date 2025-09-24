/**
 * Exercício 11 – Função fatorial
 * Criar uma função que calcule o fatorial de um número.
 * Ex: 5! = 5*4*3*2*1 = 120
 */
function fatorial(n) {
    var resultado = 1;
    for (var i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}
console.log("Fatorial de 5 = ".concat(fatorial(5)));
