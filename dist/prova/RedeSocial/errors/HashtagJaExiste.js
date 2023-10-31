import { AplicacaoErro } from "./AplicacaoErro.js";
export class HashtagJaExiste extends AplicacaoErro {
    constructor(mensagem) {
        super(mensagem);
    }
}
