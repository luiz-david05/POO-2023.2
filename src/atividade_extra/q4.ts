import Funcionario from "./q3";

export default class Professor extends Funcionario {
    constructor(nome: string, sobrenome: string, matricula: string, salario: number,  private _titulacao: string) {
        super(nome, sobrenome, matricula, salario)
    }

    get titulacao(): string {
        return this._titulacao
    }

    calcularSalarioPrimeiraParcela(): number {
        return this.salario
    }

    calcularSalarioSegundaParcela(): number {
        return 0
    }
}

// let professor: Professor = new Professor('luiz', 'david', '001', 3200, 'efetivo')
// console.log(professor.calcularSalarioPrimeiraParcela())
// console.log(professor.calcularSalarioSegundaParcela())
// console.log(professor.titulacao)