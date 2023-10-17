import Pessoa from "./q2";

class Funcionario extends Pessoa {
    constructor (nome: string, sobrenome: string, private _mat: string, private _salario: number) {
        super(nome, sobrenome)
    }

    get matricula() {
        return this._mat
    }

    get salario() {
        return this._salario
    }

    calcularSalarioPrimeiraParcela() {
        return this.salario * 0.6
    }

    calcularSalarioSegundaParcela() {
        return this.salario * 0.4
    }
}

// let funcionario: Funcionario = new Funcionario('luiz', 'david', '00001', 1320)
// console.log(funcionario.calcularSalarioPrimeiraParcela().toFixed(2))
// console.log(funcionario.calcularSalarioSegundaParcela().toFixed(2))
