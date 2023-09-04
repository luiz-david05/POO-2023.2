class Jogador {
    apelido: string;
    forca: number = 0;
    nivel: number = 0;
    xp: number = 0;

    constructor (nickname: string, power: number, level: number, xp: number) {
        this.apelido = nickname, this.forca = power, this.nivel = level, this.xp = xp;
    }

    calcularAtaque(): number {
        return this.forca * this.xp;
    }

    atacarJogador(jogadorAtacado: Jogador, dano: number): number {
        if (!(this.estaVivo(jogadorAtacado))){
            return 0;
        }

        return jogadorAtacado.xp -= dano;

    }

    estaVivo(jogador: Jogador): boolean {
        if (jogador.xp >= 0) {
            return true
        }

        return false
    }

    toString(): string {
        return `
        Apelido: ${this.apelido}
        Força: ${this.forca}
        Nível: ${this.nivel}
        Pontos Atuais: ${this.xp}\n`
    }

    determinarVencedor(jogador1: Jogador, jogador2: Jogador): string {
        if (jogador1.xp > jogador2.xp) return `\n${jogador1.apelido} tem mais pontos.`
        else if (jogador1.xp == jogador2.xp) return `\nEmpate.`
        return `\n${jogador2.apelido} tem mais pontos.`
    }
}

let jogador1: Jogador = new Jogador("Luiz", 4, 1, 6)
let jogador2: Jogador = new Jogador("Camila", 4, 1, 6)

console.log(jogador1.toString(), jogador2.toString())
jogador1.atacarJogador(jogador2, jogador1.calcularAtaque())
console.log(jogador1.determinarVencedor(jogador1, jogador2))

