import { question } from "readline-sync";
export const input = (texto) => {
    let resposta = question(texto);
    return resposta;
};
export const getNumber = (texto) => {
    let n = Number(input(texto));
    while (isNaN(n)) {
        console.log("Digite um número, tente novamente!");
        n = Number(input(texto));
    }
    return n;
};
