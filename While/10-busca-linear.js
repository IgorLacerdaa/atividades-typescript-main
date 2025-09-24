/**
 * Exercício 10 – Busca linear com while
 * Verifique se um valor existe no array; se achar, pare (break).
 */
var lista = ["sql", "ts", "js", "python", "go"];
var alvo = "python";
var pos = 0;
var encontrado = false;
while (pos < lista.length) {
    if (lista[pos] === alvo) {
        encontrado = true;
        break; // interrompe o loop quando encontra
    }
    pos++;
}
console.log(encontrado ? "Encontrado em lista[".concat(pos, "]") : "Não encontrado");
