import { AplicacaoErro } from "./AplicacaoErro.js";

export class InputInvalidoErro extends AplicacaoErro {
    constructor(mensagem: string) {
        super(mensagem)
    }
}