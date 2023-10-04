export class Conta {
    _nome;
    _numero;
    _saldo;
    constructor(_nome, _numero, _saldo) {
        this._nome = _nome;
        this._numero = _numero;
        this._saldo = _saldo;
    }
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }
    depositar(valor) {
        this._saldo += valor;
    }
    get saldo() {
        return this._saldo;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    get numero() {
        return this._numero;
    }
    get nome() {
        return this._nome;
    }
}
