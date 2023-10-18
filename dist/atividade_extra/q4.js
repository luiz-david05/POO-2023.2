import Funcionario from "./q3.js";
export default class Professor extends Funcionario {
    _titulacao;
    constructor(nome, sobrenome, matricula, salario, _titulacao) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = _titulacao;
    }
    get titulacao() {
        return this._titulacao;
    }
    calcularSalarioPrimeiraParcela() {
        return this.salario;
    }
    calcularSalarioSegundaParcela() {
        return 0;
    }
}
// let professor: Professor = new Professor('luiz', 'david', '001', 3200, 'efetivo')
// console.log(professor.calcularSalarioPrimeiraParcela())
// console.log(professor.calcularSalarioSegundaParcela())
// console.log(professor.titulacao)
