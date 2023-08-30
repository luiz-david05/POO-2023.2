"use strict";
class Saudacao {
    texto;
    destinatario;
    constructor(texto, destinatario) {
        this.texto = texto;
        this.destinatario = destinatario;
    }
    obterSaudacao() {
        return `\n${this.texto}, ${this.destinatario}`;
    }
}
let s = new Saudacao("Bom dia", "Luiz.");
console.log(s.obterSaudacao());
