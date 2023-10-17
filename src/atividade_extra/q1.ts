class Empregado {
    constructor(private _salario: number = 500) {}

    get salario() {
        return this._salario
    }

    calcularSalario(): number {
        return this.salario
    }
}

class Diarista extends Empregado {
    calcularSalario(): number {
        return super.calcularSalario() / 30
    }
}


class Horista extends Empregado {
    calcularSalario(): number {
        return super.calcularSalario() / 24
    }
}


// let horista: Horista = new Horista()
// console.log(horista.calcularSalario().toFixed(2))
// let diarista: Diarista = new Diarista()
// console.log(diarista.calcularSalario().toFixed(2))