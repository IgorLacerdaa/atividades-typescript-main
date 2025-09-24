/**
 * Exercício 12 – Função juros simples
 * Valor Final = Capital + (Capital * Taxa * Tempo)
 */

function jurosSimples(capital: number, taxa: number, tempo: number): number {
  return capital + (capital * taxa * tempo);
}

console.log(`VF = R$ ${jurosSimples(1000, 0.05, 12).toFixed(2)}`);
