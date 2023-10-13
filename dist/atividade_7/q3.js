import { Calculadora } from "./q2";
class CalculadoraCientifica extends Calculadora {
    constructor(operando1, operando2) {
        super(operando1, operando2);
    }
    exponenciar() {
        return this.operando1 ** this.operando2;
    }
}
