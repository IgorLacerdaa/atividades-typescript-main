/**
 * ts/ex3_servidor.ts
 * Conceitos: arrays numéricos, objetos, funções, enum, narrowing, média móvel simples
 */

// 1) Leituras simples + média
// Array de leituras de temperatura em Celsius
const leiturasC: number[] = [22.5, 23.1, 24.0, 25.2, 26.5];
// Calcula média das temperaturas com formatação para 2 casas decimais
const mediaTemp = Number((leiturasC.reduce((a, b) => a + b, 0) / leiturasC.length).toFixed(2));
console.log('1) Média (°C):', mediaTemp);

// 2) Objeto de leitura + conversão C↔F
// Define tipo para representar uma leitura de temperatura
type Leitura = { timestamp: string; tempC: number };
// Função para converter Celsius para Fahrenheit
function cToF(c: number): number { return Number((c * 9/5 + 32).toFixed(2)); }
// Cria objeto de leitura com timestamp atual
const l1: Leitura = { timestamp: new Date().toISOString(), tempC: 25.3 };
console.log('2) Leitura:', l1, '=> °F:', cToF(l1.tempC));

// 3) Enum de alerta + função de status
// Enum para níveis de alerta de temperatura
enum Alerta { Ok = 'OK', Atenção = 'ATENCAO', Crítico = 'CRITICO' }
// Função que classifica temperatura em nível de alerta
function classificar(tC: number): Alerta {
  if (tC >= 28) return Alerta.Crítico;    // Temperatura crítica
  if (tC >= 25) return Alerta.Atenção;    // Temperatura de atenção
  return Alerta.Ok;                        // Temperatura normal
}
// Mapeia cada temperatura para seu status de alerta
console.log('3) Status:', leiturasC.map(t => ({ t, status: classificar(t) })));

// 4) Moving Average (média móvel simples) com janela N
// Implementação de média móvel para suavizar séries temporais
function mediaMovel(valores: number[], janela: number): number[] {
  const out: number[] = []; // Array para armazenar resultados
  for (let i = 0; i < valores.length; i++) {
    const ini = Math.max(0, i - janela + 1); // Índice inicial da janela (evita índices negativos)
    const slice = valores.slice(ini, i + 1); // Extrai subarray da janela atual
    out.push(Number((slice.reduce((a, b) => a + b, 0) / slice.length).toFixed(2))); // Calcula média da janela
  }
  return out;
}
console.log('4) Média móvel (janela=3):', mediaMovel(leiturasC, 3));

// 5) União de unidade + narrowing
// Tipo união para unidades de temperatura
type Unidade = 'C' | 'F'; // Celsius ou Fahrenheit
// Função que formata temperatura com símbolo de unidade
function formatTemp(valor: number, unidade: Unidade): string {
  if (unidade === 'C') return `${valor.toFixed(1)} °C`; // Formato Celsius
  return `${valor.toFixed(1)} °F`; // Formato Fahrenheit
}
console.log('5) Format:', formatTemp(25.35, 'C'), formatTemp(cToF(25.35), 'F'));

export {}; // Marca o arquivo como um módulo para evitar conflitos de variáveis