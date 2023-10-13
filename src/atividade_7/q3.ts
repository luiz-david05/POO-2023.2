import { Calculadora } from "./q2";

class CalculadoraCientifica extends Calculadora {
    constructor (operando1: number, operando2: number) {
        super(operando1, operando2)
    }

    public exponenciar(): number {
        return this.operando1 ** this.operando2
    }
}