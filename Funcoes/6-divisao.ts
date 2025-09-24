/**
 * Exercício 06 – Função de divisão
 * Criar uma função que receba dois números e retorne a divisão.
 */

function dividir(a: number, b: number): number {
  if (b === 0) {
    console.log("Erro: divisão por zero");
    return NaN;
  }
  return a / b;
}

console.log(`Resultado: ${dividir(20, 4)}`);
