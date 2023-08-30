"use strict";
class Conta {
    numero; // = 0;
    saldo; // = 0;
    constructor(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    sacar(valor) {
        this.saldo -= valor;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    consultarSaldo() {
        return this.saldo;
    }
    transferir(destino, valor) {
        this.sacar(valor);
        destino.depositar(valor);
    }
}
let c1 = new Conta("1", 100);
let c2 = new Conta("2", 100);
let c3;
c1 = c2;
c3 = c1;
c1.sacar(10);
c1.transferir(c2, 50);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
