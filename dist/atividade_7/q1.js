class Veiculo {
    _placa;
    _ano;
    constructor(_placa, _ano) {
        this._placa = _placa;
        this._ano = _ano;
    }
    get placa() {
        return this._placa;
    }
    get ano() {
        return this._ano;
    }
}
class Carro extends Veiculo {
    _modelo;
    constructor(placa, ano, _modelo) {
        super(placa, ano);
        this._modelo = _modelo;
    }
    get modelo() {
        return this._modelo;
    }
}
class CarroEletrico extends Carro {
    _autonomiaBateria;
    constructor(placa, ano, modelo, _autonomiaBateria) {
        super(placa, ano, modelo);
        this._autonomiaBateria = _autonomiaBateria;
    }
    get autonomiaBateria() {
        return this._autonomiaBateria;
    }
}
