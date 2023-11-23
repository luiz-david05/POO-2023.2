import { Conta } from "./conta.js"

export class ContaImposto extends Conta {
    constructor(nome: string, numero: string, saldo: number, private _taxaDesconto: number) {
        super(nome, numero, saldo)
    }

    get taxaDesconto() {
        return this._taxaDesconto
    }

    depositar(valor: number) {
        const valorDepositado = valor * (1 * this._taxaDesconto / 100)
        super.depositar(valorDepositado)
    }

    sacar(valor: number): void {
		const valorDesconto = this.saldo * this._taxaDesconto / 100;
		super.sacar(valor + valorDesconto);
	}

}