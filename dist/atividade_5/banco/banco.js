export class Conta {
    numero; // = 0;
    saldo; // = 0;
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        if (this.saldo - valor < 0) {
            return false;
        }
        this.saldo -= valor;
        return true;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(contaDestino, valor) {
        if (!this.sacar(valor)) {
            return false;
        }
        contaDestino.depositar(valor);
        return true;
    }
}
export class Banco {
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
        else if (indiceAlvo == -1) {
            console.log("Impossível excluir, conta inexistente!");
        }
    }
    sacar(numero, valor) {
        let indiceAlvo = this.consultarContaPorIndice(numero);
        if (indiceAlvo != -1) {
            let conta = this.contas[indiceAlvo];
            conta.sacar(valor);
        }
        else if (indiceAlvo == -1) {
            console.log(`A conta "${numero}" não existe!`);
        }
    }
    transferir(numCred, numDeb, valor) {
        let indiceCred = this.consultarContaPorIndice(numCred);
        let indiceDeb = this.consultarContaPorIndice(numDeb);
        if (indiceCred != -1 && indiceDeb != -1) {
            let contaOrigem = this.contas[indiceCred];
            let contaDestino = this.contas[indiceDeb];
            contaOrigem.transferir(contaDestino, valor);
        }
    }
    exibirContas() {
        for (let conta of this.contas) {
            console.log(conta);
        }
    }
    calcularSaldoBanco() {
        let saldo = 0;
        for (let conta of this.contas) {
            saldo += conta.saldo;
        }
        return saldo;
    }
    mediaSaldo() {
        let saldoTotalContas = this.calcularSaldoBanco();
        let qtdContas = this.calcularQtdContas();
        if (qtdContas == 0) {
            return 0;
        }
        return saldoTotalContas / qtdContas;
    }
}