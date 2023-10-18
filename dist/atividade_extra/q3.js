import Pessoa from "./q2.js";
export default class Funcionario extends Pessoa {
    _mat;
    _salario;
    constructor(nome, sobrenome, _mat, _salario) {
        super(nome, sobrenome);
        this._mat = _mat;
        this._salario = _salario;
    }
    get matricula() {
        return this._mat;
    }
    get salario() {
        return this._salario;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario * 0.6;
    }
    calcularSalarioSegundaParcela() {
        return this.salario * 0.4;
    }
}
// let funcionario: Funcionario = new Funcionario('luiz', 'david', '00001', 1320)
// console.log(funcionario.calcularSalarioPrimeiraParcela().toFixed(2))
// console.log(funcionario.calcularSalarioSegundaParcela().toFixed(2))
