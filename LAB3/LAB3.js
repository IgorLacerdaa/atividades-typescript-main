"use strict";
/**
 * ts/ex3_servidor.ts
 * Conceitos: arrays numéricos, objetos, funções, enum, narrowing, média móvel simples
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 1) Leituras simples + média
// Array de leituras de temperatura em Celsius
var leiturasC = [22.5, 23.1, 24.0, 25.2, 26.5];
// Calcula média das temperaturas com formatação para 2 casas decimais
var mediaTemp = Number((leiturasC.reduce(function (a, b) { return a + b; }, 0) / leiturasC.length).toFixed(2));
console.log('1) Média (°C):', mediaTemp);
// Função para converter Celsius para Fahrenheit
function cToF(c) { return Number((c * 9 / 5 + 32).toFixed(2)); }
// Cria objeto de leitura com timestamp atual
var l1 = { timestamp: new Date().toISOString(), tempC: 25.3 };
console.log('2) Leitura:', l1, '=> °F:', cToF(l1.tempC));
// 3) Enum de alerta + função de status
// Enum para níveis de alerta de temperatura
var Alerta;
(function (Alerta) {
    Alerta["Ok"] = "OK";
    Alerta["Aten\u00E7\u00E3o"] = "ATENCAO";
    Alerta["Cr\u00EDtico"] = "CRITICO";
})(Alerta || (Alerta = {}));
// Função que classifica temperatura em nível de alerta
function classificar(tC) {
    if (tC >= 28)
        return Alerta.Crítico; // Temperatura crítica
    if (tC >= 25)
        return Alerta.Atenção; // Temperatura de atenção
    return Alerta.Ok; // Temperatura normal
}
// Mapeia cada temperatura para seu status de alerta
console.log('3) Status:', leiturasC.map(function (t) { return ({ t: t, status: classificar(t) }); }));
// 4) Moving Average (média móvel simples) com janela N
// Implementação de média móvel para suavizar séries temporais
function mediaMovel(valores, janela) {
    var out = []; // Array para armazenar resultados
    for (var i = 0; i < valores.length; i++) {
        var ini = Math.max(0, i - janela + 1); // Índice inicial da janela (evita índices negativos)
        var slice = valores.slice(ini, i + 1); // Extrai subarray da janela atual
        out.push(Number((slice.reduce(function (a, b) { return a + b; }, 0) / slice.length).toFixed(2))); // Calcula média da janela
    }
    return out;
}
console.log('4) Média móvel (janela=3):', mediaMovel(leiturasC, 3));
// Função que formata temperatura com símbolo de unidade
function formatTemp(valor, unidade) {
    if (unidade === 'C')
        return "".concat(valor.toFixed(1), " \u00B0C"); // Formato Celsius
    return "".concat(valor.toFixed(1), " \u00B0F"); // Formato Fahrenheit
}
console.log('5) Format:', formatTemp(25.35, 'C'), formatTemp(cToF(25.35), 'F'));
