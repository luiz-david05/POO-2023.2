import {Conta} from './q4'

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

    public consultar(numero: string): Conta {
        let contaAlvo!: Conta;

        for (let conta of this._contas) {
            if (conta.numero == numero) {
                contaAlvo = conta
                break
            }
        }
        return contaAlvo
    }

    public inserirConta(conta: Conta) {
        let indice = this.consultarPorIndice(conta.numero)

        if (indice != -1) {
            // sem nececidade real de um print informativo, mas para fins de teste é válido
            console.log("\nA conta já existe!")
        }
        else if (indice == -1) {
            this._contas.push(conta)
        }
    }

    public excluirConta(numero: string) {
        let indice = this.consultarPorIndice(numero)
        let qtdContas = this._contas.length

        if (indice != -1) {
            for (let i = indice; i < qtdContas; i++) {
                this._contas[i] = this._contas[i + 1]
            }

            this._contas.pop()
        }
        else if (indice == -1) {
            // 
            console.log("\nImpossível excluir, conta inexistente!")
        }
    }

    public sacar(numero: string, valor: number) {
        let indice = this.consultarPorIndice(numero)
        
        if (indice != -1) {
            let conta: Conta = this._contas[indice]
            conta.sacar(valor)
        }
        else if (indice == -1) {
            //
            console.log(`\nA conta "${numero}" não existe!`)
        }
    }

    public depositar(numero: string, valor: number) {
        let indice = this.consultarPorIndice(numero)
        
        if (indice != -1) {
            let conta: Conta = this._contas[indice]
            conta.depositar(valor)
        }
        else if (indice == -1) {
            //
            console.log(`\nA conta "${numero}" não existe!`)
        }
    }

    public transferir(numCred: string, numDeb: string, valor: number) {
        let indiceCred = this.consultarPorIndice(numCred)
        let indiceDeb = this.consultarPorIndice(numDeb)

        if (indiceCred != -1 && indiceDeb != -1) {
            let contaOrigem: Conta = this._contas[indiceCred]
            let contaDestino: Conta = this._contas[indiceDeb]

            contaOrigem.transferir(contaDestino, valor)
        }
        else {
            //
            console.log("\nOperação não concluída!")
        }
    }

    public toString(conta: Conta): string {
        return `\nCPF: ${conta.numero}\nNome: ${conta.nome}\nSaldo: R$ ${conta.saldo.toFixed(2)}`
    }

    public  get total(): number {
        let totalDepositado = 0
        this._contas.forEach(conta => totalDepositado += conta.saldo);

        return totalDepositado
    }

    public get totalContas(): number {
        return this._contas.length
    }

    public get mediaDepositada(): number {
        return this.total / this.totalContas
    }

    public exibirContas() {
        for (let conta of this._contas) {
            console.log(this.toString(conta))
        }
    }
}

let bb: Banco = new Banco()
bb.inserirConta(new Conta("LUIZ", "11111-1", 100))
bb.inserirConta(new Conta("DAVID", "11111-2", 100))
bb.inserirConta(new Conta("SILVA", "11111-3", 100))

bb.transferir("11111-1", "11111-2", 100)
bb.exibirContas()
console.log()
console.log(bb.total)
console.log(bb.mediaDepositada)
