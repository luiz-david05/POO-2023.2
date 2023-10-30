import { AplicacaoErro } from "./AplicacaoErro.js";

export class ElevadorVazioErro extends AplicacaoErro {
    constructor (mensagem: string) {
        super(mensagem)
    }
}