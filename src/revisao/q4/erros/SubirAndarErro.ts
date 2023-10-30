import { AplicacaoErro } from "./AplicacaoErro.js";

export class SubirAndarErro extends AplicacaoErro {
    constructor(mensagem: string) {
        super(mensagem)
    }
}