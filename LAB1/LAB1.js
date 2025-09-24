"use strict";
/**
 * ts/ex1_alunos.ts
 * Conceitos: inferência, tipos explícitos, arrays, tuplas, objetos, união, enum, funções, Map
 */
Object.defineProperty(exports, "__esModule", { value: true });
// 1) Variáveis simples + inferência
var nomeAluno = 'Ana';
var nota1 = 8.5; // number
var nota2 = 7; // number
var aprovado = true; // boolean
console.log('1) Variáveis:', { nomeAluno: nomeAluno, nota1: nota1, nota2: nota2, aprovado: aprovado });
// 2) Tipos explícitos + função tipada (média)
function media(a, b) {
    return Number(((a + b) / 2).toFixed(2));
}
var mediaAna = media(nota1, nota2);
console.log('2) Média de Ana:', mediaAna);
// 3) Array tipado + map/filter
var notas = [6, 7.5, 8, 9.2, 10];
var acimaDe8 = notas.filter(function (n) { return n >= 8; });
var mediasAjustadas = notas.map(function (n) { return Math.min(n + 0.5, 10); });
console.log('3) Arrays:', { acimaDe8: acimaDe8, mediasAjustadas: mediasAjustadas });
// 4) Tupla (nome, média) + ordenação
var registro = ['Edu', media(9, 8.5)];
console.log('4) Tupla (nome, média):', registro);
var alunos = [
    { id: 'a1', nome: 'Ana', notas: [8, 7.5, 9] },
    { id: 'a2', nome: 'Bia', notas: [6, 6.5, 7] },
    { id: 'a3', nome: 'Cris', notas: [9.5, 8.5, 10] },
];
function mediaAluno(a) {
    var soma = a.notas.reduce(function (acc, n) { return acc + n; }, 0);
    return Number((soma / a.notas.length).toFixed(2));
}
console.log('5) Médias:', alunos.map(function (a) { return ({ nome: a.nome, media: mediaAluno(a) }); }));
function formatarId(id) {
    return typeof id === 'number' ? id.toString().padStart(3, '0') : id.toUpperCase();
}
console.log('6) União:', formatarId(7), formatarId('a3'));
// 7) Enum de status + classificação por média
var StatusAluno;
(function (StatusAluno) {
    StatusAluno["Aprovado"] = "APROVADO";
    StatusAluno["Recuperacao"] = "RECUPERA\u00C7\u00C3O";
    StatusAluno["Reprovado"] = "REPROVADO";
})(StatusAluno || (StatusAluno = {}));
function statusPorMedia(m) {
    if (m >= 7)
        return StatusAluno.Aprovado;
    if (m >= 5)
        return StatusAluno.Recuperacao;
    return StatusAluno.Reprovado;
}
console.log('7) Status:', alunos.map(function (a) { return ({ nome: a.nome, status: statusPorMedia(mediaAluno(a)) }); }));
// 8) Map<string, number> (nome → média)
var mediasPorNome = new Map();
for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
    var a = alunos_1[_i];
    mediasPorNome.set(a.nome, mediaAluno(a));
}
console.log('8) Map (nome→média):', Array.from(mediasPorNome.entries()));
