import { ValorInvalidoExcessao } from "./erros/ValorInvalidoExcessao.js";
import { InputInvalidoErro } from "./erros/InputInvalidoErro.js";
import { ElevadorCheioErro } from "./erros/ElevadorCheioErro.js";
import { ElevadorVazioErro } from "./erros/ElevadorVazioErro.js";
import { SubirAndarErro } from "./erros/SubirAndarErro.js";
import { DescerAndarErro } from "./erros/DescerAndarErro.js";


class Elevador {
    constructor(
        private _andarAtual: number,
        private _totalAndares: number,
        private _capacidadeElevador: number,
        private _qtdPessoas: number
    ) {
        this.validaValor(this._andarAtual)
        this.validaValor(this._totalAndares)
        this.validaValor(this._capacidadeElevador)
        this.validaValor(this._qtdPessoas)
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

    inicializar(capacidadeElevador: number, totalAndares: number): Elevador {
        this.validaValor(capacidadeElevador)
        this.validaValor(totalAndares)

        return new Elevador(0, totalAndares, capacidadeElevador, 0)
    }

    entrar(){
        if (this.capacidadeElevador != this.qtdPessoasElevador) {
            this._qtdPessoas += 1;
            
        } else {
            throw new ElevadorCheioErro('Capacidade do elevador excedida')
        }
    }

    sair(){
        if (this.qtdPessoasElevador != 0) {
            this._qtdPessoas -= 1 
        } else {
            throw new ElevadorVazioErro('Elevador vazio!')
        }
    }

    subir(){
        if (this.andarAtual != this.totalAndares) {
            this._andarAtual += 1
        }else {
            throw new SubirAndarErro('O elevador está no último andar.')
        }
    }

    descer(){
        if (this.andarAtual != 0) {
            this._andarAtual -= 1;
        }
        else {
            throw new DescerAndarErro('O elevador está no térreo.')
        }
    }

    informacoes() {
        return `\nInformações do Elevador:\nTotal de andares no prédio: ${this.totalAndares}\nCapacidade do Elevador: ${this.capacidadeElevador}\nTotal de pessoas no elevador: ${this.qtdPessoasElevador}\nAndar atual: ${this.andarAtual}`
    }

    private validaInput(input: number) {
        if (isNaN(input)) {
            throw new InputInvalidoErro('O valor deve ser um número.')
        }
    }

    private validaValor(valor: number) {
        this.validaInput(valor)

        if (valor < 0) {
            throw new ValorInvalidoExcessao('O valor deve ser positivo.')
        }
    }
}

export { Elevador };

// retorna um erro pois uma das variaveis está com valor negativo
let elevador: Elevador = new Elevador(0, 0, 0, 0)
let novoElevador: Elevador = elevador.inicializar(5, 1)
novoElevador.entrar()
console.log(novoElevador.informacoes())