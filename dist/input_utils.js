import { question } from "readline-sync";
export const input = (texto) => {
    let anwser = question(texto);
    while (anwser === '') {
        console.log('Digite um valor válido!');
        anwser = question(texto);
    }
    return anwser;
};
