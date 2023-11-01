import { Perfil } from "./basicas/Perfil.js";
import { RepositorioPerfis } from "./repositorios/RepositorioPerfis.js";
import { Postagem } from "./basicas/Postagem.js";
import { RepositorioPostagens } from "./repositorios/RepositorioPostagens.js";
import { PostagemAvancada } from "./basicas/PostagemAvancada.js";

export class RedeSocial {
    private _repositorioPerfis: RepositorioPerfis;
    private _repositorioPostagens: RepositorioPostagens;

    get repositorioPerfis() {
        return this._repositorioPerfis;
    }

    get repositorioPostagens() {
        return this._repositorioPostagens;
    }

    incluirPerfil(perfil: Perfil): boolean {
        if (
            this.validarPerfil(perfil) &&
            this.repositorioPerfis.incluir(perfil)
        ) {
            return true;
        }

        return false;
    }

    consultarPerfil(id: number, nome: string, email: string): Perfil | null {
        return this._repositorioPerfis.consultar(id, nome, email);
    }

    private validarPerfil(perfil: Perfil): boolean {
        if (perfil.id != null && perfil.nome != null && perfil.email != null) {
            if (
                !this.repositorioPerfis.consultar(
                    perfil.id,
                    perfil.nome,
                    perfil.email
                )
            ) {
                return true;
            }
        }

        return false;
    }

    incluirPostagem(postagem: Postagem, perfil: Perfil): boolean {
        if (
            this.validarPostagem(postagem) &&
            this.repositorioPostagens.incluir(postagem, perfil)
        ) {
            return true;
        }

        return false;
    }

    consultarPostagens(
        id: number,
        texto: string,
        hashtag: string,
        perfil: Perfil
    ): Postagem[] {
        return this.repositorioPostagens.consultar(id, texto, hashtag, perfil);
    }

    private validarPostagem(postagem: Postagem): boolean {
        if (
            postagem.id != null &&
            postagem.texto != null &&
            postagem.likes != null &&
            postagem.deslikes != null &&
            postagem.data != null &&
            postagem.perfil != null
        ) {
            if (
                !this.repositorioPostagens.consultar(
                    postagem.id,
                    null,
                    null,
                    null
                )
            ) {
                return true;
            }
        }

        return false;
    }

    curtir(idPostagem: number) {
        const postagens = this.consultarPostagens(idPostagem, null, null, null);

        for (const postagem of postagens) {
            if (postagem) {
                postagem.curtir();
            }
        }
    }

    descurtir(idPostagem: number): void {
        const postagens = this.consultarPostagens(idPostagem, null, null, null);

        for (const postagem of postagens) {
            if (postagem) {
                postagem.descurtir();
            }
        }
    }

    decrementarVisualizacoes(postagem: PostagemAvancada): void {
        if (postagem.visualizacoesRestantes > 1) {
            postagem.decrementarVisualizacoes();
        }
    }

    exibirPostagensPorPerfil(id: number): Postagem[] {
        const perfil = this.consultarPerfil(id, null, null);
        const postagensDisponiveis: Postagem[] = [];

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

    exibirPostagensPorHashtag(hashtag: string): PostagemAvancada[] {
        const postagens = this.consultarPostagens(null, null, hashtag, null);
        const postagensDisponiveis: PostagemAvancada[] = [];

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

    postagemToString(postagem: Postagem): void {
        console.log(`Postagem ID: ${postagem.id}`);
        console.log(`Texto: ${postagem.texto}`);
        console.log(`Curtidas: ${postagem.likes}`);
        console.log(`Descurtidas: ${postagem.deslikes}`);
        console.log(`Data: ${postagem.data}`)

        if (postagem instanceof PostagemAvancada) {
            console.log(`hashtags: ${postagem.hashtags}`)
            console.log(`visualizações restantes: ${postagem.visualizacoesRestantes}`)
        }

        console.log("---");
    }
}
