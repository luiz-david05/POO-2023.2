import { AplicacaoErro } from "./AplicacaoErro.js";
export class PerfilJaExiste extends AplicacaoErro {
    constructor(mensagem) {
        super(mensagem);
    }
}
