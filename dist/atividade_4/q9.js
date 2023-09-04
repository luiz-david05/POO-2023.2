"use strict";
class Conta2 {
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
let conta1 = new Conta2("111", 100);
let conta2 = new Conta2("222", 100);
if (conta1.sacar(110)) {
    console.log("Há um erro no código");
}
else {
    console.log("\nA operação não foi realizada.");
    console.log(`saldo da conta ${conta1.numero}: ${conta1.consultarSaldo()}`);
}
if (conta1.transferir(conta2, 110)) {
    console.log("\nHá um erro no código");
}
else {
    console.log("\nA operação não foi realizada");
    console.log(`saldo da conta ${conta2.numero}: ${conta1.consultarSaldo()}`);
}
