import { PostagemAvancada } from "../basicas/PostagemAvancada.js";
export class RepositorioPostagens {
    _postagens = [];
    incluir(postagem, perfil) {
        if (this.consultarPostagemPorIndice(postagem) == -1) {
            this._postagens.push(postagem);
            perfil.postagens.push(postagem);
            return true;
        }
        return false;
    }
    consultarPostagemPorIndice(postagem) {
        let indiceAlvo = -1;
        for (let i = 0; i < this._postagens.length; i++) {
            if (this._postagens[i].id == postagem.id &&
                this._postagens[i].texto == postagem.texto) {
                indiceAlvo = i;
                break;
            }
        }
        return indiceAlvo;
    }
    consultar(id, texto, hashtag, perfil) {
        const postagensFiltradas = [];
        for (const postagem of this._postagens) {
            if ((id === null || postagem.id === id) &&
                (texto === null || postagem.texto.includes(texto)) &&
                (hashtag === null ||
                    (postagem instanceof PostagemAvancada &&
                        postagem.consultarHashtag(hashtag) !== -1)) &&
                (perfil === null || postagem.perfil === perfil)) {
                postagensFiltradas.push(postagem);
            }
        }
        return postagensFiltradas;
    }
}
