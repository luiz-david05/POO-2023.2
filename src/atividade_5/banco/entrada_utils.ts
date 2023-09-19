import { question } from "readline-sync";

export const input = (texto: string) => {
    let resposta: string = question(texto)

    return resposta
}

export const getNumber = (texto: string) => {
    let n: number = Number(input(texto))

    while (isNaN(n)) {
        console.log("Digite um número, tente novamente!")
        n = Number(input(texto))
    }

    return n
}