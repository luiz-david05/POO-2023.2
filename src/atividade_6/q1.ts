export class Calculadora {
    constructor(private _operando1: number = 10, private _operando2: number = 20) {}

    public get soma(): number {
        return this._operando1 + this._operando2;
    }

    public get subtracao(): number {
        return this._operando1 - this._operando2;
    }
}