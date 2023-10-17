class Empregado {
    _salario;
    constructor(_salario = 500) {
        this._salario = _salario;
    }
    get salario() {
        return this._salario;
    }
    calcularSalario() {
        return this.salario;
    }
}
class Diarista extends Empregado {
    calcularSalario() {
        return super.calcularSalario() / 30;
    }
}
class Horista extends Empregado {
    calcularSalario() {
        return super.calcularSalario() / 24;
    }
}
// let horista: Horista = new Horista()
// console.log(horista.calcularSalario().toFixed(2))
// let diarista: Diarista = new Diarista()
// console.log(diarista.calcularSalario().toFixed(2))
