import { Conta } from "./conta.js";
import { Poupanca } from "./poupanca.js";
import { ContaImposto } from "./ContaImposto.js";
import { ContaInexistenteError } from "./erros/ContaInexistenteError.js";
class Banco {
    _contas = [];
    get contas() {
        return this._contas;
    }
    get total() {
        let totalDepositado = 0;
        this._contas.forEach((conta) => (totalDepositado += conta.saldo));
        return totalDepositado;
    }
    get totalContas() {
        return this._contas.length;
    }
    get mediaDepositada() {
        return this.total / this.totalContas;
    }
    consultarPorIndice(numero) {
        let indiceAlvo = -1;
        let qtdContas = this._contas.length;
        for (let i = 0; i < qtdContas; i++) {
            if (this._contas[i].numero == numero) {
                indiceAlvo = i;
                break;
            }
        }
        if (indiceAlvo == -1) {
            throw new ContaInexistenteError("A conta não existe");
        }
        return indiceAlvo;
    }
    consultarConta(numero) {
        let contaAlvo;
        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaAlvo = conta;
                break;
            }
        }
        if (contaAlvo == null) {
            throw new ContaInexistenteError("A conta não existe");
        }
        return contaAlvo;
    }
    incluirConta(conta) {
        let indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            //
            console.log("\nA conta já existe!");
            return;
        }
        this._contas.push(conta);
    }
    excluirConta(numero) {
        let indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            this._contas.splice(indice, 1);
        }
        else {
            //
            console.log("\nImpossível excluir, conta inexistente!");
        }
    }
    sacar(numero, valor) {
        let indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            let conta = this._contas[indice];
            conta.sacar(valor);
            //
            console.log("\nSaque realizado com sucesso!");
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
            //
            console.log("\nDepósito realizado com sucesso!");
        }
        else if (indice == -1) {
            //
            console.log(`\nA conta "${numero}" não existe!`);
        }
    }
    // questão 5
    transferir(numCred, numDeb, valor) {
        let indiceCred = this.consultarPorIndice(numCred);
        let indiceDeb = this.consultarPorIndice(numDeb);
        if (indiceCred !== -1 && indiceDeb !== -1) {
            let contaOrigem = this._contas[indiceCred];
            let contaDestino = this._contas[indiceDeb];
            contaOrigem.transferir(contaDestino, valor);
        }
    }
    renderJuros(numero) {
        let indiceAlvo = this.consultarPorIndice(numero);
        if (indiceAlvo != -1) {
            let conta = this._contas[indiceAlvo];
            if (conta instanceof Poupanca) {
                let poupanca = conta;
                poupanca.depositar(poupanca.saldo * poupanca.taxaJuros);
            }
        }
    }
    toString(conta) {
        let message = `\nCPF: ${conta.numero}\nNome: ${conta.nome}\nSaldo: R$ ${conta.saldo.toFixed(2)}`;
        if (conta instanceof Poupanca) {
            message += `\nTaxa de Juros: ${conta.taxaJuros}%`;
        }
        else if (conta instanceof ContaImposto) {
            message += `\nTaxa de imposto: ${conta.taxaDesconto}%`;
        }
        return message;
    }
    arquivoToString(conta) {
        let tipo = "C";
        if (conta instanceof Poupanca) {
            tipo = "P";
        }
        else if (conta instanceof ContaImposto) {
            tipo = "CI";
        }
        let contaString = `${tipo};${conta.numero};${conta.nome};${conta.saldo}`;
        if (tipo === "P") {
            contaString += `;${conta.taxaJuros}`;
        }
        else if (tipo === "CI") {
            contaString += `;${conta.taxaDesconto}`;
        }
        return contaString;
    }
    exibirContas() {
        for (let conta of this._contas) {
            console.log(this.toString(conta));
        }
    }
    consultarHistorico(numero) {
        let indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            return this._contas[indice].historico;
        }
        return [];
    }
}
export { Conta, ContaImposto, Poupanca, Banco };
// questão 5
// let banco = new Banco();
// let conta = new Conta("teste", "1111", 100);
// let conta2 = new Conta("teste2", "2222", 100);
// banco.incluirConta(conta);
// banco.incluirConta(conta2);
// banco.transferir("1111", "2222", 200);
// aumentou a robustez do app, sem a necessidade de tantos if para a validação
