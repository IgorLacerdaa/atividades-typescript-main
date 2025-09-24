/**
 * Exercício 09 – Função média de notas
 * Criar uma função que receba 3 notas e retorne a média.
 */

function media(n1: number, n2: number, n3: number): number {
  return (n1 + n2 + n3) / 3;
}

console.log(`Média = ${media(7, 8, 6).toFixed(2)}`);

