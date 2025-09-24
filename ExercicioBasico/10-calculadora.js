/**
 * Exercício 10 – Calculadora simples
 * Função que recebe dois números e uma operação (+, -, *, /).
 * Retorna o resultado. Trata divisão por zero.
 */
function calcular(a, b, op) {
    if (op === "+")
        return a + b;
    if (op === "-")
        return a - b;
    if (op === "*")
        return a * b;
    if (op === "/") {
        if (b === 0) {
            console.log("Erro: divisão por zero.");
            return NaN;
        }
        return a / b;
    }
    console.log("Operação inválida. Use +, -, * ou /.");
    return NaN;
}
// Exemplos:
console.log("10 + 5 = ".concat(calcular(10, 5, "+")));
console.log("10 - 5 = ".concat(calcular(10, 5, "-")));
console.log("10 * 5 = ".concat(calcular(10, 5, "*")));
console.log("10 / 5 = ".concat(calcular(10, 5, "/")));
