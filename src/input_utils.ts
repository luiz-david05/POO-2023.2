import { question } from "readline-sync";


export const input = (texto: string): string => {
    let anwser: string = question(texto);

    while (anwser === '') {
        console.log('Digite um valor válido!');
        anwser = question(texto);
    }

    return anwser;
}