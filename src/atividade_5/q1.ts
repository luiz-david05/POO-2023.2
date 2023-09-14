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
    }

    sacar(numero: string, valor: number){
        let indiceAlvo = this.consultarContaPorIndice(numero)

        if (indiceAlvo != -1){
            let conta: Conta = this.contas[indiceAlvo]
            console.log(`Operação de crédito no valor: R$ ${valor.toFixed(2)}, realizada com sucesso!`)
            conta.depositar(valor)
            console.log(`Novo saldo da conta "${numero}": R$ ${conta.consultarSaldo().toFixed(2)}`)
        }
        else {
            console.log(`Conta "${numero}" não encontrada!`)
        }
    }

    exibirContas(){
        for (let conta of this.contas){
            console.log(conta)
        }
    }
}

let pagbank: Banco = new Banco()
pagbank.inserirConta(new Conta("1111", 100))
pagbank.exibirContas()
pagbank.inserirConta(new Conta("1111", 0))
pagbank.inserirConta(new Conta("1113", 0))
pagbank.sacar("1112", 100)
pagbank.exibirContas()