export class Calculadora {
    constructor(private _operando1: number, private _operando2: number) {}

    public get operando1() {
        return this._operando1
    }

    public get operando2() {
        return this._operando2
    }

    public soma(): number {
        return this.operando1 + this.operando2
    }
}