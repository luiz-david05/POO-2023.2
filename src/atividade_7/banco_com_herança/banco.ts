class Conta {
    constructor (private _nome: string, private _numero: string, private _saldo: number, private _historico: string[] = []) {
        this._historico = [`Conta criada: +${_saldo}`]
    }

    public sacar(valor: number): void {
        if (valor <= 0) {
            //
            console.log("O valor do saque deve ser maior que zero.");
            return;
        }
    
        if (this._saldo < valor) {
            //
            console.log("Saldo insuficiente para realizar o saque.");
            return;
        }
    
        this._saldo -= valor;
        this._historico.push(`Saque: -${valor}`)
    }
    
    public depositar(valor: number): void {
        if (valor <= 0) {
            //
            console.log("O valor do depósito deve ser maior que zero.");
            return;
        }
    
        this._saldo += valor;
        this._historico.push(`Depósito: +${valor}`)
    }
    
    
    public get saldo(): number {
        return this._saldo
    }
    
    public transferir (contaDestino: Conta, valor: number): void{
        this.sacar(valor)
        contaDestino.depositar(valor)
        this._historico.push(`Transferência: -${valor} para conta ${contaDestino._numero}`)
    }

    public get numero(): string {
        return this._numero
    }

    public get nome(): string {
        return this._nome
    }

    public get historico(): string[] {
        return this._historico
    }
}


class Poupanca extends Conta {
    constructor(nome: string, numero: string, saldo: number, private _taxaJuros: number) {
        super(nome, numero, saldo)
    }

    public get taxaJuros(): number {
        return this._taxaJuros
    }
}


class ContaImposto extends Conta {
    constructor(nome: string, numero: string, saldo: number, private _taxaDesconto: number) {
        super(nome, numero, saldo)
    }

    public get taxaDesconto() {
        return this._taxaDesconto
    }

    depositar(valor: number) {
        const valorDepositado = valor * (1 * this._taxaDesconto / 100)
        super.depositar(valorDepositado)
    }

    sacar(valor: number): void {
		const valorDesconto = this.saldo * this._taxaDesconto / 100;
		super.sacar(valor + valorDesconto);
	}

}

class Banco {
    private _contas: Conta[] = []

    private consultarPorIndice(numero: string) {
        let indiceAlvo = -1;

        let qtdContas = this._contas.length

        for (let i = 0; i < qtdContas; i++) {
            if (this._contas[i].numero == numero) {
                indiceAlvo = i
                break
            } 
        }

        return indiceAlvo
    }

    consultar(numero: string): Conta {
        let contaAlvo!: Conta;

        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaAlvo = conta
                break
            }
        }
        return contaAlvo
    }

    inserirConta(conta: Conta) {
        let indice = this.consultarPorIndice(conta.numero)

        if (indice != -1) {
            //
            console.log("\nA conta já existe!")
            return
        }
        
        this._contas.push(conta)
        //
        console.log("\nConta inserida com sucesso!")
        
    }

    excluirConta(numero: string) {
        let indice = this.consultarPorIndice(numero)

        if (indice != -1) {
            this._contas.splice(indice, 1)
        }
        else {
            //
            console.log("\nImpossível excluir, conta inexistente!")
        }
    }

    sacar(numero: string, valor: number) {
        let indice = this.consultarPorIndice(numero)
        
        if (indice != -1) {
            let conta: Conta = this._contas[indice]
            conta.sacar(valor)
            //
            console.log("\nSaque realizado com sucesso!");
        }
        else if (indice == -1) {
            //
            console.log(`\nA conta "${numero}" não existe!`)
        }
    }

    depositar(numero: string, valor: number) {
        let indice = this.consultarPorIndice(numero)
        
        if (indice != -1) {
            let conta: Conta = this._contas[indice]
            conta.depositar(valor)
            //
            console.log("\nDepósito realizado com sucesso!");
        }
        else if (indice == -1) {
            //
            console.log(`\nA conta "${numero}" não existe!`)
        }
    }

    transferir(numCred: string, numDeb: string, valor: number) {
        let indiceCred = this.consultarPorIndice(numCred)
        let indiceDeb = this.consultarPorIndice(numDeb)
    
        if (indiceCred !== -1 && indiceDeb !== -1) {
            if (valor <= 0) {
                //
                console.log("\nO valor da transferência deve ser maior que zero.");
            } else {
                let contaOrigem: Conta = this._contas[indiceCred]
                let contaDestino: Conta = this._contas[indiceDeb]
    
                if (contaOrigem.saldo < valor) {
                    //
                    console.log("\nSaldo insuficiente para realizar a transferência.");
                } else {
                    contaOrigem.transferir(contaDestino, valor);
                    //
                    console.log("\nTransferência realizada com sucesso!");
                }
            }
        } else {
            //
            console.log("\nConta de origem ou conta de destino não existem!");
        }
    }

    renderJuros(numero: string) {
        let indiceAlvo = this.consultarPorIndice(numero)

        if (indiceAlvo != -1) {
            let conta: Conta = this._contas[indiceAlvo]
            if (conta instanceof Poupanca){
                let poupanca: Poupanca = <Poupanca> conta
                poupanca.depositar(poupanca.saldo * poupanca.taxaJuros)
            }
        }
    }

    toString(conta: Conta): string {
        let message = `\nCPF: ${conta.numero}\nNome: ${conta.nome}\nSaldo: R$ ${conta.saldo.toFixed(2)}`
        if (conta instanceof Poupanca) {
            message += `\nTaxa de Juros: ${conta.taxaJuros}%`
        }
        else if (conta instanceof ContaImposto) {
            message += `\nTaxa de imposto: ${conta.taxaDesconto}%`
        }
        
        return message
    }

    arquivoToString(conta: Conta) {
        let tipo = 'C'
        if (conta instanceof Poupanca) {
            tipo = 'P'
        } else if (conta instanceof ContaImposto) {
            tipo = 'CI'
        }
        
        // mudar exibição conforme padrão pré estabelecido
        let contaString = `${tipo};${conta.numero};${conta.nome};${conta.saldo}`
        if (tipo === 'P') {
            contaString += `;${(conta as Poupanca).taxaJuros}`
        } else if (tipo === 'CI') {
            contaString += `;${(conta as ContaImposto).taxaDesconto}`
        }
    
        return contaString;
    }
    

    get total(): number {
        let totalDepositado = 0
        this._contas.forEach(conta => totalDepositado += conta.saldo);

        return totalDepositado
    }

    get totalContas(): number {
        return this._contas.length
    }

    get mediaDepositada(): number {
        return this.total / this.totalContas
    }

    // adicionando um get para retornar as contas
    get contas() {
        return this._contas
    }

    exibirContas() {
        for (let conta of this._contas) {
            console.log(this.toString(conta))
        }
    }

    consultarHistorico(numero: string): string[] {
        let indice = this.consultarPorIndice(numero)

        if (indice != -1) {
            return this._contas[indice].historico
        }

        return []
    } 
}


export {Conta, Banco, ContaImposto, Poupanca}


/* Obs sobre os '//', console.log é útil para dar feedback para o usuário, mas em um ambiente real é mais eficiente retornar erro 
ou sucesso/ boolean true or false, para um melhor controle do código. */