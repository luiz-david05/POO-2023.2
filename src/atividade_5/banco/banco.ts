export class Conta {
    numero: string; // = 0;
    saldo: number; // = 0;

    constructor (numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar (valor: number): boolean {
        if (this.saldo - valor < 0){
            return false
        }

        this.saldo -= valor
        return true
    }
    
    depositar (valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo (): number {
        return this.saldo;
    }

    transferir (contaDestino: Conta, valor: number): boolean {
        if (!this.sacar(valor)) {
            return false
        }

        contaDestino.depositar(valor);
        return true
    }
}


export class Banco {
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