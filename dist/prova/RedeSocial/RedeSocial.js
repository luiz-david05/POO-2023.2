import { PostagemAvancada } from "./basicas/PostagemAvancada.js";
export class RedeSocial {
    _repositorioPerfis;
    _repositorioPostagens;
    get repositorioPerfis() {
        return this._repositorioPerfis;
    }
    get repositorioPostagens() {
        return this._repositorioPostagens;
    }
    incluirPerfil(perfil) {
        if (this.validarPerfil(perfil) &&
            this.repositorioPerfis.incluir(perfil)) {
            return true;
        }
        return false;
    }
    consultarPerfil(id, nome, email) {
        return this._repositorioPerfis.consultar(id, nome, email);
    }
    validarPerfil(perfil) {
        if (perfil.id != null && perfil.nome != null && perfil.email != null) {
            if (!this.repositorioPerfis.consultar(perfil.id, perfil.nome, perfil.email)) {
                return true;
            }
        }
        return false;
    }
    incluirPostagem(postagem, perfil) {
        if (this.validarPostagem(postagem) &&
            this.repositorioPostagens.incluir(postagem, perfil)) {
            return true;
        }
        return false;
    }
    consultarPostagens(id, texto, hashtag, perfil) {
        return this.repositorioPostagens.consultar(id, texto, hashtag, perfil);
    }
    validarPostagem(postagem) {
        if (postagem.id != null &&
            postagem.texto != null &&
            postagem.likes != null &&
            postagem.deslikes != null &&
            postagem.data != null &&
            postagem.perfil != null) {
            if (!this.repositorioPostagens.consultar(postagem.id, null, null, null)) {
                return true;
            }
        }
        return false;
    }
    curtir(idPostagem) {
        const postagens = this.consultarPostagens(idPostagem, null, null, null);
        for (const postagem of postagens) {
            if (postagem) {
                postagem.curtir();
            }
        }
    }
    descurtir(idPostagem) {
        const postagens = this.consultarPostagens(idPostagem, null, null, null);
        for (const postagem of postagens) {
            if (postagem) {
                postagem.descurtir();
            }
        }
    }
    decrementarVisualizacoes(postagem) {
        if (postagem.visualizacoesRestantes > 1) {
            postagem.decrementarVisualizacoes();
        }
    }
    exibirPostagensPorPerfil(id) {
        const perfil = this.consultarPerfil(id, null, null);
        const postagensDisponiveis = [];
        for (let postagem of perfil.postagens) {
            if (postagem instanceof PostagemAvancada) {
                this.decrementarVisualizacoes(postagem);
                if (postagem.visualizacoesRestantes > 0) {
                    postagensDisponiveis.push(postagem);
                }
            }
        }
        return postagensDisponiveis;
    }
    exibirPostagensPorHashtag(hashtag) {
        const postagens = this.consultarPostagens(null, null, hashtag, null);
        const postagensDisponiveis = [];
        for (const postagem of postagens) {
            if (postagem instanceof PostagemAvancada) {
                this.decrementarVisualizacoes(postagem);
                if (postagem.visualizacoesRestantes > 0) {
                    postagensDisponiveis.push(postagem);
                }
            }
        }
        return postagensDisponiveis;
    }
    postagemToString(postagem) {
        console.log(`Postagem ID: ${postagem.id}`);
        console.log(`Texto: ${postagem.texto}`);
        console.log(`Curtidas: ${postagem.likes}`);
        console.log(`Descurtidas: ${postagem.deslikes}`);
        console.log(`Data: ${postagem.data}`);
        if (postagem instanceof PostagemAvancada) {
            console.log(`hashtags: ${postagem.hashtags}`);
            console.log(`visualizações restantes: ${postagem.visualizacoesRestantes}`);
        }
        console.log("---");
    }
}
