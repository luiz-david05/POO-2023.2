export default class JogadorFutebol {
    constructor(
        private _apelido: string,
        private _posicao: string,
        private _dt_nascimento: Date,
        private _nacionalidade: string,
        private _altura: number,
        private _pe: string,
        private _status: string
    ) {}

    get apelido() {
        return this._apelido;
    }

    get posicao() {
        return this._posicao;
    }

    get dtNascimento() {
        return this._dt_nascimento;
    }

    get nacionalidade() {
        return this._nacionalidade;
    }

    get altura() {
        return this._altura;
    }

    get pe() {
        return this._pe;
    }

    get status() {
        return this._status;
    }

    private formatarData(data: Date): string {
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear();
      
        return `${dia}/${mes}/${ano}`;
    }  
      
    toString() {
        return `
            \nDados do jogador:\n\nApelido: ${this.apelido}\nPosição: ${this._posicao}
            \nData de nascimento: ${this.formatarData(this.dtNascimento)}
            \nNacionalidade: ${this.nacionalidade}\nAltura: ${this.altura}\nPé: ${this.pe}`;
    }

    calcularIdadeJogador(): number {
        const dataAtual: Date = new Date();
        const nascimento: Date = this.dtNascimento;

        const diffAnos = dataAtual.getFullYear() - nascimento.getFullYear();

        if (
            dataAtual.getMonth() < nascimento.getMonth() ||
            (dataAtual.getMonth() == nascimento.getMonth() &&
                dataAtual.getDate() < nascimento.getDate())
        ) {
            return diffAnos - 1;
        }

        return diffAnos;
    }

    // Calcular idade média em que um jogador se aposenta, conforme sua posição
    calcularIdadeMedia(): number {
        switch (this.posicao) {
            case "atacante":
                return 35;
            case "defesa":
                return 40;
            case "meio-campo":
                return 38;
            default:
                return 0;
        }
    }
}
