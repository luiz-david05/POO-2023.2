import { AplicacaoError } from "./AplicacaoError";
export class ValorInvalido extends AplicacaoError {
    constructor(mensagem) {
        super(mensagem);
    }
}
