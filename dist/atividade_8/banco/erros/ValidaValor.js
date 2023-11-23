import { AplicacaoError } from "./AplicacaoError";
export class ValidaValor extends AplicacaoError {
    constructor(mensagem) {
        super(mensagem);
    }
}
