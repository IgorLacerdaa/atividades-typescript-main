/**
 * Exercício 13 – Conversor de Temperatura
 * F = C * 1.8 + 32
 */
function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}
// Exemplo:
var c = 25;
var f = celsiusParaFahrenheit(c);
console.log("".concat(c, "\u00B0C equivalem a ").concat(f.toFixed(1), "\u00B0F"));
