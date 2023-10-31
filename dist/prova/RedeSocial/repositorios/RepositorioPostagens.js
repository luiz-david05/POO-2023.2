import { PostagemAvancada } from "../PostagemAvancada";
class RepositorioPostagens {
    _postagens = [];
    incluir(postagem, perfil) {
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
