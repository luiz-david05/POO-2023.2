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