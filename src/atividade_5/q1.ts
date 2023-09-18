import { Conta } from "../atividade_4/q9";


class Banco {
    contas: Conta[] = []
    
    inserirConta(conta: Conta){
        let indiceAlvo = this.consultarContaPorIndice(conta.numero)

        if (indiceAlvo != -1){
            console.log("A conta já existe!")
            return
        }

        this.contas.push(conta)
    }
    
    calcularQtdContas(): number{
        return this.contas.length
    }

    consultarConta(numero: string): Conta{
        let contaAlvo!: Conta
        let qtdContas = this.calcularQtdContas()
        
        for (let i = 0; i < qtdContas; i++){
            if (this.contas[i].numero == numero){
                contaAlvo = this.contas[i]
            }
        }

        return contaAlvo
    }
    
    consultarContaPorIndice(numero: string): number{
        let indiceAlvo = -1
        let qtdContas = this.calcularQtdContas()

        for (let i = 0; i < qtdContas; i++){
            if (this.contas[i].numero == numero){
                indiceAlvo = i
                break
            }
        }

        return indiceAlvo
    }

    alterarConta(conta: Conta){
        let indiceAlvo = this.consultarContaPorIndice(conta.numero)

        if (indiceAlvo != -1){
            this.contas[indiceAlvo] = conta
        }
    }

    excluirConta(numero: string){
        let indiceAlvo = this.consultarContaPorIndice(numero)
        let qtdContas = this.calcularQtdContas()

        if (indiceAlvo != -1){
            for (let i = indiceAlvo; i < qtdContas; i++){
                this.contas[i] = this.contas[i+1]
            }

            this.contas.pop()
        }
        else if (indiceAlvo == -1) {
            console.log("Impossível excluir, conta inexistente!")
        }
    }

    sacar(numero: string, valor: number){
        let indiceAlvo = this.consultarContaPorIndice(numero)

        if (indiceAlvo != -1){
            let conta: Conta = this.contas[indiceAlvo]
            conta.sacar(valor)
        }
        else if (indiceAlvo == -1) {
            console.log(`A conta "${numero}" não existe!`)
        }
    }

    transferir(numCred: string, numDeb: string, valor: number) {
        let indiceCred = this.consultarContaPorIndice(numCred)
        let indiceDeb = this.consultarContaPorIndice(numDeb)

        if (indiceCred != -1 && indiceDeb != -1) {
            let contaOrigem: Conta = this.contas[indiceCred]
            let contaDestino: Conta = this.contas[indiceDeb]

            contaOrigem.transferir(contaDestino, valor)
        }
    }

    exibirContas(){
        for (let conta of this.contas){
            console.log(conta)
        }
    }

    calcularSaldoBanco() {
        let saldo = 0;

        for (let conta of this.contas) {
            saldo += conta.saldo
        }

        return saldo
    }

    mediaSaldo() {
        let saldoTotalContas = this.calcularSaldoBanco()
        let qtdContas = this.calcularQtdContas()

        if (qtdContas == 0) {
            return 0
        }

        return saldoTotalContas / qtdContas
    } 
}

let pagbank: Banco = new Banco()
pagbank.inserirConta(new Conta("1111", 100))
// pagbank.exibirContas()
pagbank.inserirConta(new Conta("1111", 0))
pagbank.inserirConta(new Conta("1113", 0))
pagbank.sacar("1112", 100)
// pagbank.exibirContas()
pagbank.inserirConta(new Conta("1114", 100))
pagbank.transferir("1111", "1114", 10)
pagbank.exibirContas()
console.log(`Quantidade de contas ${pagbank.calcularQtdContas()}`)
console.log(`Saldo total de todas as contas: ${pagbank.calcularSaldoBanco().toFixed(2)}`)
console.log(`Média de saldo das contas: ${pagbank.mediaSaldo().toFixed(2)}`)