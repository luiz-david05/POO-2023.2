export class Calculadora {
    _operando1;
    _operando2;
    constructor(_operando1 = 10, _operando2 = 20) {
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }
    get soma() {
        return this._operando1 + this._operando2;
    }
    get subtracao() {
        return this._operando1 - this._operando2;
    }
}
