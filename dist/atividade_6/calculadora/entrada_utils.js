import { question } from "readline-sync";
export function input(texto) {
    let resposta = question(texto);
    return resposta;
}
export function getNumber(texto) {
    let n = Number(input(texto));
    while (isNaN(n)) {
        console.log("Entrada inválida, digite um número.");
        n = getNumber(texto);
    }
    return n;
}
