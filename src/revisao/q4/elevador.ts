class Elevador {
    constructor(private _andarAtual: number, private _totalAndares: number, private _capacidadeElevador: number, private _qtdPessoas: number) {}

    get andarAtual() {
        return this._andarAtual
    }

    get totalAndares() {
        return this._totalAndares
    }

    get capacidadeElevador() {
        return this._capacidadeElevador
    }

    get qtdPessoasElevador() {
        return this._qtdPessoas
    }

    inicializar(){
        
    }

    entrar(): boolean {
        if (this.capacidadeElevador == this.qtdPessoasElevador){
            return false
        }

        this.qtdPessoasElevador + 1
        return true
    }

    sair(): boolean {
        if (this.capacidadeElevador > 0) {
            this.qtdPessoasElevador - 1
            return true
        }

        return false
    }
}