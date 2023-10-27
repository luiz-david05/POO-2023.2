class Elevador {
    _andarAtual;
    _totalAndares;
    _capacidadeElevador;
    _qtdPessoas;
    constructor(_andarAtual, _totalAndares, _capacidadeElevador, _qtdPessoas) {
        this._andarAtual = _andarAtual;
        this._totalAndares = _totalAndares;
        this._capacidadeElevador = _capacidadeElevador;
        this._qtdPessoas = _qtdPessoas;
    }
    get andarAtual() {
        return this._andarAtual;
    }
    get totalAndares() {
        return this._totalAndares;
    }
    get capacidadeElevador() {
        return this._capacidadeElevador;
    }
    get qtdPessoasElevador() {
        return this._qtdPessoas;
    }
    inicializar() {
    }
    entrar() {
        if (this.capacidadeElevador == this.qtdPessoasElevador) {
            return false;
        }
        this.qtdPessoasElevador + 1;
        return true;
    }
    sair() {
        if (this.capacidadeElevador > 0) {
            this.qtdPessoasElevador - 1;
            return true;
        }
        return false;
    }
}
