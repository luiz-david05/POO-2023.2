import { RedeSocial } from "./RedeSocial/RedeSocial.js";
import { getNumber } from "./utils.js";
class App {
    _redeSocial;
    constructor(_redeSocial) {
        this._redeSocial = _redeSocial;
    }
    showMenu() {
        const texto = `\t1 - Exibir postagens por perfil\n` +
            `\t2 - Exibir postagens por hashtag\n` +
            `\t3 - Exibir todos os posts de um perfil\n` +
            `\t4 - Exibir o feed de postagens\n` +
            `\t5 - Criar novo perfil\n` +
            `\t6 - Excluir Perfil\n` +
            `\t7 - Criar nova Postagem\n` +
            `\t8 - Excluir Postagem\n` +
            `\t7 - Curtir Postagem\n` +
            `\t8 - Descurtir Postagem\n` +
            `\t0 - Sair`;
        console.log(texto);
    }
    run() {
        // carregar perfis aqui e postagens
        let opcao;
        do {
            this.showMenu();
            opcao = getNumber("\nSelecione a opção: ");
            switch (opcao) {
                case 1:
                    let idPerfil = getNumber('id do perfil: ');
                    console.log(redeSocial.exibirPostagensPorPerfil(idPerfil));
                    break;
                case 2:
                    //
                    break;
                case 3:
                    //
                    break;
                case 4:
                    //
                    break;
                case 0:
                    console.log("Aplicação encerrada.");
                    break;
                default:
                    console.log("Opção inválida. Tente novamente.");
            }
        } while (opcao != 0);
    }
}
const redeSocial = new RedeSocial();
const app = new App(redeSocial);
app.run();
