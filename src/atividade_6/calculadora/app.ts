import { Calculadora } from "./calculadora";
import { input, getNumber } from "./entrada_utils";

function main() {
    menu()
    let opcao: number = getNumber("Opção: ")
    
    let n1 = getNumber("Primeiro operando: ")
    let n2 = getNumber("Segundo operando: ")
    let calculadora: Calculadora = new Calculadora(n1, n2)
    
    while (opcao != 0) {
        if (opcao == 1) {
            console.log(`\nSOMA: ${calculadora.soma}`)
        }
        else if (opcao == 2) {
            console.log(`\nSOMA: ${calculadora.soma}`)
        }
        else if (opcao == 3) {
            calculadora.multiplicacao
            console.log(`\nSOMA: ${calculadora.soma}`)
        }
        else if (opcao == 4) {
            calculadora.divisao
            console.log(`\nSOMA: ${calculadora.soma}`)
        }
    }
}


function menu() {
    console.log("\n\t######### Calculadora ############")
    console.log("\n4 OPERAÇÕES BÁSICAS")
    console.log("\n[1] - Adição\t[2] - Subtração\t[3] - Multiplicação\t[4] - Divisão")
    console.log("[0] - SAIR")
}
