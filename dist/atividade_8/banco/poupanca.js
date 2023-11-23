import { Conta } from "./conta.js";
export class Poupanca extends Conta {
    _taxaJuros;
    constructor(nome, numero, saldo, _taxaJuros) {
        super(nome, numero, saldo);
        this._taxaJuros = _taxaJuros;
    }
    get taxaJuros() {
        return this._taxaJuros;
    }
}
