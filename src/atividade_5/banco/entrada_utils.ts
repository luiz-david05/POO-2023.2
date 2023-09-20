import { question } from "readline-sync";


export function input(texto: string): string {
    let resposta: string = question(texto)

    return resposta
} 


export function getNumber(texto: string): number {
    let n: number = Number(input(texto))

    while (isNaN(n)) {
        console.log("Entrada inválida, digite um número.")
        n = getNumber(texto)
    }

    return n
}