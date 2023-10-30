import { Perfil } from "./perfil.js";
import { Postagem } from "./postagem.js";

class PostagemAvancada extends Postagem {
    constructor(perfil: Perfil, texto: string, likes: number, deslikes: number, data: Date, private _hashtags: string[] = [], private _visualizacoesRestantes: number) {
        super(perfil, texto, likes, deslikes, data)
    }

    get hashtags(): string[] { return this._hashtags }
    get visualizacoesRestantes(): number { return this._visualizacoesRestantes }

    addHashtag(hashtag: string) {
        this.hashtags.push(hashtag)
    }

    existeHashtag(hashtag: string): boolean {
        return false
    }
}