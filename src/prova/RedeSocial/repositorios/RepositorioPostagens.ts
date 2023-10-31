import { Perfil } from "../Perfil.js";
import { Postagem } from "../Postagem.js";
import { PostagemAvancada } from "../PostagemAvancada";

class RepositorioPostagens {
    private _postagens: Postagem[] = [];

    incluir(postagem: Postagem, perfil: Perfil) {
      
    }

    consultar(
        id: number | null,
        texto: string | null,
        hashtag: string | null,
        perfil: Perfil
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
