import { AplicacaoErro } from "./AplicacaoErro.js";

export class ElevadorCheioErro extends AplicacaoErro {
    constructor(mensagem: string) {
        super(mensagem)
    }
}