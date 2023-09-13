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
    transferir(destino, valor) {
        if (!(this.sacar(valor))) {
            return false;
        }
        this.sacar(valor);
        destino.depositar(valor);
        return true;
    }
}
