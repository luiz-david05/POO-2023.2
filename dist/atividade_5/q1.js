import { Conta } from "../atividade_4/q9";
class Banco {
    contas = [];
    inserirConta(conta) {
        let indiceAlvo = this.consultarContaPorIndice(conta.numero);
        if (indiceAlvo != -1) {
            console.log("A conta já existe!");
            return;
        }
        this.contas.push(conta);
    }
    calcularQtdContas() {
        return this.contas.length;
    }
    consultarConta(numero) {
        let contaAlvo;
        let qtdContas = this.calcularQtdContas();
        for (let i = 0; i < qtdContas; i++) {
            if (this.contas[i].numero == numero) {
                contaAlvo = this.contas[i];
            }
        }
        return contaAlvo;
    }
    consultarContaPorIndice(numero) {
        let indiceAlvo = -1;
        let qtdContas = this.calcularQtdContas();
        for (let i = 0; i < qtdContas; i++) {
            if (this.contas[i].numero == numero) {
                indiceAlvo = i;
                break;
            }
        }
        return indiceAlvo;
    }
    alterarConta(conta) {
        let indiceAlvo = this.consultarContaPorIndice(conta.numero);
        if (indiceAlvo != -1) {
            this.contas[indiceAlvo] = conta;
        }
    }
    excluirConta(numero) {
        let indiceAlvo = this.consultarContaPorIndice(numero);
        let qtdContas = this.calcularQtdContas();
        if (indiceAlvo != -1) {
            for (let i = indiceAlvo; i < qtdContas; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    sacar(numero, valor) {
        let indiceAlvo = this.consultarContaPorIndice(numero);
        if (indiceAlvo != -1) {
            let conta = this.contas[indiceAlvo];
            console.log(`Operação de crédito no valor: R$ ${valor.toFixed(2)}, realizada com sucesso!`);
            conta.depositar(valor);
            console.log(`Novo saldo da conta "${numero}": R$ ${conta.consultarSaldo().toFixed(2)}`);
        }
        else {
            console.log(`Conta "${numero}" não encontrada!`);
        }
    }
    exibirContas() {
        for (let conta of this.contas) {
            console.log(conta);
        }
    }
}
let pagbank = new Banco();
pagbank.inserirConta(new Conta("1111", 100));
pagbank.exibirContas();
pagbank.inserirConta(new Conta("1111", 0));
pagbank.inserirConta(new Conta("1113", 0));
pagbank.sacar("1112", 100);
pagbank.exibirContas();
