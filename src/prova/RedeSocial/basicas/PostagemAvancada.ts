import { Perfil } from "./Perfil.js";
import { Postagem } from "./Postagem.js";

export class PostagemAvancada extends Postagem {
    constructor(
        id: number,
        texto: string,
        likes: number,
        deslikes: number,
        data: Date,
        perfil: Perfil,
        private _hashtags: string[] = [],
        private _visualizacoesRestantes: number
        ) {
            super(id, texto, likes, deslikes, data, perfil);
        }
        
    get hashtags(): string[] {
        return this._hashtags;
    }
    get visualizacoesRestantes(): number {
        return this._visualizacoesRestantes;
    }

    private qtdHashtags(): number {
        return this._hashtags.length
    }

    consultarHashtag(hashtag: string) {
        // se não encontrada retorna -1
        return this.hashtags.indexOf(hashtag)
    }

    adicionarHashtag(hashtag: string): boolean {
        if (!this.existeHashtag(hashtag)) {
            this.hashtags.push(hashtag);
            return true
        }
        
        return false

    }

    existeHashtag(hashtag: string): boolean {
        let indice = this.consultarHashtag(hashtag)

        return indice != -1
    }

    decrementarVisualizacoes(): void {
        this._visualizacoesRestantes--
    }
}