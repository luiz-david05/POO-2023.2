class Pessoa {
    constructor (private _nome: string, private _sobrenome: string) {}

    get nome() {
        return this._nome
    }

    get sobrenome() {
        return this._sobrenome
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome
    }
}

// let pessoa: Pessoa = new Pessoa('Luiz', 'David')
// console.log(pessoa.nome)
// console.log(pessoa.sobrenome)
// console.log(pessoa.nomeCompleto)