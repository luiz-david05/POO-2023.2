import { PostagemAvancada } from "./PostagemAvancada.js";
class RepositorioPostagens {
    _postagens = [];
    incluir(postagem, perfil) {
        this._postagens.push(postagem);
        perfil.postagens.push(postagem);
    }
    consultar(id, texto, hashtag, perfil) {
        const postagensFiltradas = [];
        for (const postagem of this._postagens) {
            if ((id === null || postagem.id === id) &&
                (texto === null || postagem.texto.includes(texto)) &&
                (hashtag === null || (postagem instanceof PostagemAvancada && postagem.consultarHashtag(hashtag) != -1)) &&
                (perfil === null || perfil.postagens.includes(postagem))) {
                postagensFiltradas.push(postagem);
            }
        }
        return postagensFiltradas;
    }
}
