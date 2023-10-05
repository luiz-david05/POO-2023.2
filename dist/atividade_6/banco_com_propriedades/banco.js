class Conta {
    _nome;
    _numero;
    _saldo;
    constructor(_nome, _numero, _saldo) {
        this._nome = _nome;
        this._numero = _numero;
        this._saldo = _saldo;
        this._historico = [`Conta criada: +${_saldo}`];
    }
    _historico = [];
    sacar(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser maior que zero.");
            return;
        }
        if (this._saldo < valor) {
            console.log("Saldo insuficiente para realizar o saque.");
            return;
        }
        this._saldo -= valor;
        this._historico.push(`Saque: -${valor}`);
    }
    depositar(valor) {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser maior que zero.");
            return;
        }
        this._saldo += valor;
        this._historico.push(`Depósito: +${valor}`);
    }
    get saldo() {
        return this._saldo;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
        this._historico.push(`Transferência: -${valor} para conta ${contaDestino._numero}`);
    }
    get numero() {
        return this._numero;
    }
    get nome() {
        return this._nome;
    }
    get historico() {
        return this._historico;
    }
}
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
            console.log("\nA conta já existe!");
        }
        else if (indice == -1) {
            this._contas.push(conta);
            console.log("\nConta inserida com sucesso!");
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
            console.log("\nDepósito realizado com sucesso!");
        }
        else if (indice == -1) {
            //
            console.log(`\nA conta "${numero}" não existe!`);
        }
    }
    transferir(numCred, numDeb, valor) {
        let indiceCred = this.consultarPorIndice(numCred);
        let indiceDeb = this.consultarPorIndice(numDeb);
        if (indiceCred !== -1 && indiceDeb !== -1) {
            if (valor <= 0) {
                console.log("\nO valor da transferência deve ser maior que zero.");
            }
            else {
                let contaOrigem = this._contas[indiceCred];
                let contaDestino = this._contas[indiceDeb];
                if (contaOrigem.saldo < valor) {
                    console.log("\nSaldo insuficiente para realizar a transferência.");
                }
                else {
                    contaOrigem.transferir(contaDestino, valor);
                    console.log("\nTransferência realizada com sucesso!");
                }
            }
        }
        else {
            console.log("\nConta de origem ou conta de destino não existem!");
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
    consultarHistorico(numero) {
        let indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            return this._contas[indice].historico;
        }
        return [];
    }
}
export { Conta, Banco };
