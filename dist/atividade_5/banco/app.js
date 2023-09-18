import { input, getNumber } from "./entrada_utils";
import { Conta, Banco } from "./banco";
let bb = new Banco();
function main() {
    showMenu();
    let opcao = opcaoValida();
    // while (opcao != 0) {
    // }
}
function showMenu() {
    let menu = "1 - Cadastrar conta\t2 - Consultar conta\t3 - Realizar saque\n";
    menu += "\n4 - Realisar depósito\t5 - Excluir conta\tTransferir\n";
    menu += "\n7 - Totalizações\n";
    menu += "\n0 -  Sair\n";
    console.log(menu);
}
function opcaoValida() {
    let opcao = getNumber("\nDigite uma opção: ");
    while (opcao < 0 || opcao > 7) {
        console.log("\nOpção inválida!");
        opcao = getNumber("\nDigite uma opção: ");
    }
    return opcao;
}
function inserir() {
    console.log("\nCadastrar conta\n");
    let numero = input("Digite o número da conta: ");
    let conta;
    conta = new Conta(numero, 0);
    bb.inserirConta(conta);
}
main();
