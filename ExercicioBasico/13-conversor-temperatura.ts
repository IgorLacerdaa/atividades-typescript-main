/**
 * Exercício 13 – Conversor de Temperatura
 * F = C * 1.8 + 32
 */

function celsiusParaFahrenheit(celsius: number): number {
  return celsius * 1.8 + 32;
}

// Exemplo:
let c = 25;
let f = celsiusParaFahrenheit(c);
console.log(`${c}°C equivalem a ${f.toFixed(1)}°F`);
