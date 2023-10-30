export class AplicacaoErro extends Error {
    constructor(mensagem: string) {
        super(mensagem)
    }
}