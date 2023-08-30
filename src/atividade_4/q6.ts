class Saudacao {
    texto: string;
    destinatario: string;

    constructor (texto: string, destinatario: string) {
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao(): string {
        return `\n${this.texto}, ${this.destinatario}`
    }
}

let s: Saudacao = new Saudacao("Bom dia", "Luiz.");
console.log(s.obterSaudacao());