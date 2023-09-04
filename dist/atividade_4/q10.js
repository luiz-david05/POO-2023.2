"use strict";
class Jogador {
    apelido;
    forca = 0;
    nivel = 0;
    xp = 0;
    constructor(nickname, power, level, xp) {
        this.apelido = nickname, this.forca = power, this.nivel = level, this.xp = xp;
    }
    calcularAtaque() {
        return this.forca * this.xp;
    }
    atacarJogador(jogadorAtacado, dano) {
        if (!(this.estaVivo(jogadorAtacado))) {
            return 0;
        }
        return jogadorAtacado.xp -= dano;
    }
    estaVivo(jogador) {
        if (jogador.xp >= 0) {
            return true;
        }
        return false;
    }
    toString() {
        return `
        Apelido: ${this.apelido}
        Força: ${this.forca}
        Nível: ${this.nivel}
        Pontos Atuais: ${this.xp}\n`;
    }
    determinarVencedor(jogador1, jogador2) {
        if (jogador1.xp > jogador2.xp)
            return `\n${jogador1.apelido} tem mais pontos.`;
        else if (jogador1.xp == jogador2.xp)
            return `\nEmpate.`;
        return `\n${jogador2.apelido} tem mais pontos.`;
    }
}
let jogador1 = new Jogador("Luiz", 4, 1, 6);
let jogador2 = new Jogador("Camila", 4, 1, 6);
console.log(jogador1.toString(), jogador2.toString());
jogador1.atacarJogador(jogador2, jogador1.calcularAtaque());
console.log(jogador1.determinarVencedor(jogador1, jogador2));
