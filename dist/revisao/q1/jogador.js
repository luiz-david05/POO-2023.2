export default class JogadorFutebol {
    _apelido;
    _posicao;
    _dt_nascimento;
    _nacionalidade;
    _altura;
    _pe;
    _status;
    constructor(_apelido, _posicao, _dt_nascimento, _nacionalidade, _altura, _pe, _status) {
        this._apelido = _apelido;
        this._posicao = _posicao;
        this._dt_nascimento = _dt_nascimento;
        this._nacionalidade = _nacionalidade;
        this._altura = _altura;
        this._pe = _pe;
        this._status = _status;
    }
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
    formatarData(data) {
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
    calcularIdadeJogador() {
        const dataAtual = new Date();
        const nascimento = this.dtNascimento;
        const diffAnos = dataAtual.getFullYear() - nascimento.getFullYear();
        if (dataAtual.getMonth() < nascimento.getMonth() ||
            (dataAtual.getMonth() == nascimento.getMonth() &&
                dataAtual.getDate() < nascimento.getDate())) {
            return diffAnos - 1;
        }
        return diffAnos;
    }
    // Calcular idade média em que um jogador se aposenta, conforme sua posição
    calcularIdadeMedia() {
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
