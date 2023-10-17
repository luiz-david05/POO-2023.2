export default class Pessoa {
    _nome;
    _sobrenome;
    constructor(_nome, _sobrenome) {
        this._nome = _nome;
        this._sobrenome = _sobrenome;
    }
    get nome() {
        return this._nome;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }
}
// let pessoa: Pessoa = new Pessoa('Luiz', 'David')
// console.log(pessoa.nome)
// console.log(pessoa.sobrenome)
// console.log(pessoa.nomeCompleto)
