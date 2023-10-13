class Veiculo {
    constructor (private _placa: string, private _ano: number) {}

    public get placa() {
        return this._placa
    }

    public get ano() {
        return this._ano
    }
}


class Carro extends Veiculo {
    constructor (placa: string, ano: number, private _modelo: string) {
        super(placa, ano)
    }

    public get modelo() {
        return this._modelo
    }
}


class CarroEletrico extends Carro {
    constructor (placa: string, ano: number, modelo: string, private _autonomiaBateria: number) {
        super(placa, ano, modelo)
    }

    public get autonomiaBateria() {
        return this._autonomiaBateria
    }
}