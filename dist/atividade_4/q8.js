"use strict";
class Equipamento {
    ligado;
    constructor(ligado) {
        this.ligado = ligado;
    }
    liga() {
        if (!(this.ligado))
            return this.ligado = true;
        return this.ligado;
    }
    desliga() {
        if (this.ligado)
            return this.ligado = false;
        return this.ligado;
    }
    inverterEstado() {
        if (this.ligado)
            return this.ligado = false;
        return this.ligado = true;
    }
    estaLigado() {
        if (this.ligado)
            return "Ligado";
        return "Desligado";
    }
}
let equipamento = new Equipamento(false);
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`);
equipamento.liga();
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`);
equipamento.desliga();
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`);
equipamento.inverterEstado();
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`);
