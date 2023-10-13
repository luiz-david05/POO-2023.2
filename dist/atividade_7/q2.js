export class Calculadora {
    _operando1;
    _operando2;
    constructor(_operando1, _operando2) {
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }
    get operando1() {
        return this._operando1;
    }
    get operando2() {
        return this._operando2;
    }
    soma() {
        return this.operando1 + this.operando2;
    }
}
