export class Calculadora {
    _operando1;
    _operando2;
    constructor(_operando1, _operando2) {
        this._operando1 = _operando1;
        this._operando2 = _operando2;
    }
    get soma() {
        return this._operando1 + this._operando2;
    }
    get subtracao() {
        return this._operando1 - this._operando2;
    }
    get multiplicacao() {
        return this._operando1 * this._operando2;
    }
    get divisao() {
        if (this._operando2 == 0) {
            return null;
        }
        return this._operando1 / this._operando2;
    }
}
