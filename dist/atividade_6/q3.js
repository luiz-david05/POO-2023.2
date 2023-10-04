import { Conta } from './q4';
class Banco {
    _contas = [];
    consultarPorIndice(numero) {
        let indiceAlvo = -1;
        let qtdContas = this._contas.length;
        for (let i = 0; i < qtdContas; i++) {
            if (this._contas[i].numero == numero) {
                indiceAlvo = i;
                break;
            }
        }
        return indiceAlvo;
    }
    consultar(numero) {
        let contaAlvo;
        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaAlvo = conta;
                break;
            }
        }
        return contaAlvo;
    }
    inserirConta(conta) {
        let indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            // sem nececidade real de um print informativo, mas para fins de teste é válido
            console.log("\nA conta já existe!");
        }
        else if (indice == -1) {
            this._contas.push(conta);
        }
    }
    excluirConta(numero) {
        let indice = this.consultarPorIndice(numero);
        let qtdContas = this._contas.length;
        if (indice != -1) {
            for (let i = indice; i < qtdContas; i++) {
                this._contas[i] = this._contas[i + 1];
            }
            this._contas.pop();
        }
        else if (indice == -1) {
            // 
            console.log("\nImpossível excluir, conta inexistente!");
        }
    }
    sacar(numero, valor) {
        let indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            let conta = this._contas[indice];
            conta.sacar(valor);
        }
        else if (indice == -1) {
            //
            console.log(`\nA conta "${numero}" não existe!`);
        }
    }
    depositar(numero, valor) {
        let indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            let conta = this._contas[indice];
            conta.depositar(valor);
        }
        else if (indice == -1) {
            //
            console.log(`\nA conta "${numero}" não existe!`);
        }
    }
    transferir(numCred, numDeb, valor) {
        let indiceCred = this.consultarPorIndice(numCred);
        let indiceDeb = this.consultarPorIndice(numDeb);
        if (indiceCred != -1 && indiceDeb != -1) {
            let contaOrigem = this._contas[indiceCred];
            let contaDestino = this._contas[indiceDeb];
            contaOrigem.transferir(contaDestino, valor);
        }
        else {
            //
            console.log("\nOperação não concluída!");
        }
    }
    toString(conta) {
        return `\nCPF: ${conta.numero}\nNome: ${conta.nome}\nSaldo: R$ ${conta.saldo.toFixed(2)}`;
    }
    get total() {
        let totalDepositado = 0;
        this._contas.forEach(conta => totalDepositado += conta.saldo);
        return totalDepositado;
    }
    get totalContas() {
        return this._contas.length;
    }
    get mediaDepositada() {
        return this.total / this.totalContas;
    }
    exibirContas() {
        for (let conta of this._contas) {
            console.log(this.toString(conta));
        }
    }
}
let bb = new Banco();
bb.inserirConta(new Conta("LUIZ", "11111-1", 100));
bb.inserirConta(new Conta("DAVID", "11111-2", 100));
bb.inserirConta(new Conta("SILVA", "11111-3", 100));
bb.transferir("11111-1", "11111-2", 100);
bb.exibirContas();
console.log();
console.log(bb.total);
console.log(bb.mediaDepositada);
