import { AplicacaoError } from "./AplicacaoError.js";
export class ValorInvalido extends AplicacaoError {
    constructor(mensagem) {
        super(mensagem);
    }
}
