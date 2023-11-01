import { Perfil } from "../basicas/Perfil.js";
import { Postagem } from "../basicas/Postagem.js";
import { PostagemAvancada } from "../basicas/PostagemAvancada.js";

export class RepositorioPostagens {
    private _postagens: Postagem[] = [];

    incluir(postagem: Postagem, perfil: Perfil): boolean {
        if (this.consultarPostagemPorIndice(postagem) == -1) {
            this._postagens.push(postagem);
            perfil.postagens.push(postagem)
            return true;
        }

        return false;
    }

    consultarPostagemPorIndice(postagem: Postagem) {
        let indiceAlvo = -1;

        for (let i = 0; i < this._postagens.length; i++) {
            if (
                this._postagens[i].id == postagem.id &&
                this._postagens[i].texto == postagem.texto
            ) {
                indiceAlvo = i;
                break;
            }
        }

        return indiceAlvo;
    }

    consultar(
        id: number | null,
        texto: string | null,
        hashtag: string | null,
        perfil: Perfil | null
    ): Postagem[] {
        const postagensFiltradas: Postagem[] = [];

        for (const postagem of this._postagens) {
            if (
                (id === null || postagem.id === id) &&
                (texto === null || postagem.texto.includes(texto)) &&
                (hashtag === null ||
                    (postagem instanceof PostagemAvancada &&
                        postagem.consultarHashtag(hashtag) !== -1)) &&
                (perfil === null || postagem.perfil === perfil)
            ) {
                postagensFiltradas.push(postagem);
            }
        }

        return postagensFiltradas;
    }
}