/**
 * Exercício 13 – Conversão Celsius → Fahrenheit
 * F = C * 1.8 + 32
 */

function celsiusParaFahrenheit(c: number): number {
  return c * 1.8 + 32;
}

console.log(`25°C = ${celsiusParaFahrenheit(25)}°F`);
