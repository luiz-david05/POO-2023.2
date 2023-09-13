import { Conta } from '../atividade_4/q9.js';
class Banco {
    contas = [];
    inserirConta(conta) {
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == conta.numero) {
                console.log("A conta já existe no banco de dados.");
                return;
            }
        }
        this.contas.push(conta);
    }
    consultarConta(numero) {
        let contaProcurada = null;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                contaProcurada = this.contas[i];
                break;
            }
        }
        return contaProcurada;
    }
    consultarPorIndice(numero) {
        let indiceProcurado = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indiceProcurado = i;
                break;
            }
        }
        return indiceProcurado;
    }
    alterarConta(conta) {
        let indiceProcurado = this.consultarPorIndice(conta.numero);
        if (indiceProcurado != -1) {
            this.contas[indiceProcurado] = conta;
        }
    }
    excluirConta(numero) {
        let indiceProcurado = this.consultarPorIndice(numero);
        if (indiceProcurado != -1) {
            for (let i = indiceProcurado; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    sacar(numero, valor) {
        let indiceProcurado = this.consultarPorIndice(numero);
        if (indiceProcurado != -1) {
            let conta = this.contas[indiceProcurado];
            conta.sacar(valor);
        }
    }
    creditar(numero, valorCredito) {
        let indiceProcurado = this.consultarPorIndice(numero);
        if (indiceProcurado != -1) {
            let conta = this.contas[indiceProcurado];
            conta.depositar(valorCredito);
            console.log(`Operação de crédito no valor: R$ ${valorCredito.toFixed(2)}, realizada!`);
        }
        else {
            console.log("Conta não encontrada!");
        }
    }
    exibirContas() {
        for (let c of this.contas) {
            console.log(c);
        }
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let indiceProcuradoCredito = this.consultarPorIndice(numeroCredito);
        let indiceProcuradoDebito = this.consultarPorIndice(numeroDebito);
        if (indiceProcuradoCredito != -1 && indiceProcuradoDebito != -1) {
            let contaCredito = this.contas[indiceProcuradoCredito];
            let contaDebito = this.contas[indiceProcuradoDebito];
            contaCredito.transferir(contaDebito, valor);
            console.log(`Transferência realizada com sucesso!`);
        }
        else {
            console.log("Operação não concluída!");
        }
    }
}
let banco = new Banco();
let contaTeste = new Conta("1111-1", 100);
banco.inserirConta(contaTeste);
banco.inserirConta(new Conta("1111-1", 200));
banco.creditar("1111-1", 100);
banco.exibirContas();
banco.inserirConta(new Conta("1111-2", 0));
banco.transferir("1111-1", "1111-2", 100);
banco.exibirContas();
