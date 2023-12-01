import { Conta } from "./Conta.js";
export class ContaImposto extends Conta {
    _taxaDesconto;
    constructor(nome, numero, saldo, _taxaDesconto) {
        super(nome, numero, saldo);
        this._taxaDesconto = _taxaDesconto;
    }
    get taxaDesconto() {
        return this._taxaDesconto;
    }
    sacar(valor) {
        const valorDesconto = valor * (1 + this._taxaDesconto / 100);
        super.sacar(valor + valorDesconto);
    }
    depositar(valor) {
        const valorDepositado = valor * (1 - this._taxaDesconto / 100);
        super.depositar(valorDepositado);
    }
}
