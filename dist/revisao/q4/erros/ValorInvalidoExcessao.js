import { AplicacaoErro } from "./AplicacaoErro.js";
export class ValorInvalidoExcessao extends AplicacaoErro {
    constructor(mensagem) {
        super(mensagem);
    }
}
