import { Postagem } from "./Postagem.js";
export class PostagemAvancada extends Postagem {
    _hashtags;
    _visualizacoesRestantes;
    constructor(id, texto, likes, deslikes, data, perfil, _hashtags = [], _visualizacoesRestantes) {
        super(id, texto, likes, deslikes, data, perfil);
        this._hashtags = _hashtags;
        this._visualizacoesRestantes = _visualizacoesRestantes;
    }
    get hashtags() {
        return this._hashtags;
    }
    get visualizacoesRestantes() {
        return this._visualizacoesRestantes;
    }
    qtdHashtags() {
        return this._hashtags.length;
    }
    consultarHashtag(hashtag) {
        // se não encontrada retorna -1
        return this.hashtags.indexOf(hashtag);
    }
    adicionarHashtag(hashtag) {
        if (!this.existeHashtag(hashtag)) {
            this.hashtags.push(hashtag);
            return true;
        }
        return false;
    }
    existeHashtag(hashtag) {
        let indice = this.consultarHashtag(hashtag);
        return indice != -1;
    }
    decrementarVisualizacoes() {
        this._visualizacoesRestantes--;
    }
}
