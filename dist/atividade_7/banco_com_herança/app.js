import { getNumber, input } from '../../atividade_5/banco/entrada_utils.js';
import { Conta, Banco, Poupanca, ContaImposto } from './banco.js';
import * as fs from 'fs';
let nubank = new Banco();
function main() {
    let opcao;
    menu();
    opcao = validarOpcao();
    while (opcao != 0) {
        if (opcao == 1) {
            inserir();
        }
        else if (opcao == 2) {
            consultar();
        }
        else if (opcao == 3) {
            sacar();
        }
        else if (opcao == 4) {
            depositar();
        }
        else if (opcao == 5) {
            excluir();
        }
        else if (opcao == 6) {
            transferir();
        }
        else if (opcao == 7) {
            totalizacoes();
        }
        else if (opcao == 8) {
            historico();
        }
        else if (opcao == 9) {
            renderJuros();
        }
        else if (opcao == 10) {
            lerArquivo();
        }
        input("\nAperte enter <- para continuar...");
        if (opcao == 0) {
            break;
        }
        limparTela();
        menu();
        opcao = validarOpcao();
    }
    console.log("\nAplicação encerrada!");
}
function menu() {
    console.log('\n1 - Cadastrar\t2 - Consultar\t3 - Sacar\n' +
        '\n4 - Depositar\t5 - Excluir\t6 - Transferir\n' +
        '\n7 - Totalizações\t8 - Histórico\t9 - Render Juros\n' +
        '\n10 - Cadastrar Contas do Arquivo' +
        '\n0 - Sair\n');
}
function validarOpcao() {
    let opcao = getNumber("Opção: ");
    while (opcao < 0 || opcao > 10) {
        opcao = getNumber("Digite uma opção válida: ");
    }
    return opcao;
}
function inserir() {
    console.log("\nCadastrar Conta\n");
    let nome = input("Digite o nome do titular da conta: ");
    let numero = input("Digite o número do CPF: ").trim();
    let tentativasRestantes = 3;
    while (!validarCPF(numero)) {
        console.log(`\nNumero de tentativas restantes: ${tentativasRestantes}`);
        numero = input("Digite um número de CPF válido: ");
        tentativasRestantes--;
        if (tentativasRestantes == 0) {
            console.log("Fim das tentativas!");
            break;
        }
    }
    let tipo = getTipoConta();
    let conta;
    if (tipo == 'C') {
        conta = new Conta(nome, numero, 0);
    }
    else if (tipo == 'P') {
        let taxaJuros = getNumber("Taxa de juros: ");
        conta = new Poupanca(nome, numero, 0, taxaJuros);
    }
    else if (tipo == 'CI') {
        let taxaDesconto = getNumber("Taxa de desconto: ");
        conta = new ContaImposto(nome, numero, 0, taxaDesconto);
    }
    nubank.inserirConta(conta);
}
function consultar() {
    console.log("\nConsultar Saldo\n");
    let numero = input("Digite o CPF: ");
    let conta = nubank.consultar(numero);
    if (conta != null) {
        console.log(nubank.toString(conta));
    }
    else if (conta == null) {
        console.log("\nConta não encontrada!");
    }
}
function sacar() {
    console.log("\nSacar valor da Conta\n");
    let numero = input("Digite o CPF do titular: ");
    let valor = getNumber("Digite o valor do saque: ");
    nubank.sacar(numero, valor);
}
function depositar() {
    console.log("\nDepositar valor na Conta\n");
    let numero = input("Digite o CPF do titular: ");
    let valor = getNumber("Digite o valor do deposito: ");
    nubank.depositar(numero, valor);
}
function excluir() {
    console.log("\nExcluir Conta\n");
    let numero = input("Digite o CPF do titular: ");
    nubank.excluirConta(numero);
}
function transferir() {
    console.log("\nTrânsferir entre Contas\n");
    let numOrigem = input("Digite o CPF do titular da conta de origem: ");
    let numDestino = input("Digite o CPF do titular da conta de destino: ");
    let valor = getNumber("Valor da transferência: ");
    nubank.transferir(numOrigem, numDestino, valor);
}
function totalizacoes() {
    nubank.exibirContas();
    console.log(`\nQuantidade de contas no Banco: ${nubank.totalContas}`);
    console.log(`\nSaldo total do Banco: ${nubank.total.toFixed(2)}`);
    console.log(`\nValor médio do saldo das contas: ${nubank.mediaDepositada.toFixed(2)}`);
}
function renderJuros() {
    let numero = input("Digite o CPF do titular: ");
    nubank.renderJuros(numero);
}
function historico() {
    console.log("\nHistórico de operações de uma conta\n");
    let numero = input("Digite o CPF do titular da conta: ");
    let historico = nubank.consultarHistorico(numero);
    console.log(historico);
}
function limparTela() {
    let ask = input("\nLimpar tela? [Y]/[N]: ").toLowerCase();
    while (ask != "y" && ask != "n") {
        ask = input("\nLimpar tela? [Y]/[N]: ").toLowerCase();
    }
    if (ask == "y") {
        console.log('\n'.repeat(20));
    }
}
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '')
        return false;
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;
    // Valida 1º digito	
    let add = 0;
    for (let i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2º digito	
    add = 0;
    for (let i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}
function getTipoConta() {
    console.log("Tipo de conta: [C] - Corrente, [P] Poupanca e [CI] Imposto: ");
    let tipo = input("Tipo: ");
    while (tipo != 'C' && tipo != 'P' && tipo != 'CI') {
        tipo = input("Tipo: ");
    }
    return tipo;
}
function lerArquivo() {
    let contas = fs.readFileSync('./contas.txt').toString().split('\n');
    for (let conta of contas) {
        let dadosConta = conta.split(';');
        let [nome, cpf, saldo, tipo, taxa] = dadosConta;
        let contaNova = new Conta(nome, cpf, Number(saldo));
        if (tipo == 'P') {
            contaNova = new Poupanca(nome, cpf, Number(saldo), Number(taxa));
        }
        else if (tipo == 'CI') {
            contaNova = new ContaImposto(nome, cpf, Number(saldo), Number(taxa));
        }
        nubank.inserirConta(contaNova);
    }
}
main();
