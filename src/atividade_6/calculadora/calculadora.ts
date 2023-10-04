export class Calculadora {
    constructor(private _operando1: number, private _operando2: number) {}

    public get soma(): number {
        return this._operando1 + this._operando2;
    }

    public get subtracao(): number {
        return this._operando1 - this._operando2;
    }

    public get multiplicacao(): number {
        return this._operando1 * this._operando2;
    }

    public get divisao(): number {
        if (this._operando2 == 0) {
            return null
        }

        return this._operando1 / this._operando2
    }
}