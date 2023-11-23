import { Conta } from "./conta.js";

export class Poupanca extends Conta {
    constructor(
        nome: string,
        numero: string,
        saldo: number,
        private _taxaJuros: number
    ) {
        super(nome, numero, saldo);
    }

    public get taxaJuros(): number {
        return this._taxaJuros;
    }
}
