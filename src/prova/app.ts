import { RedeSocial } from "./RedeSocial/RedeSocial.js";
import { Perfil } from "./RedeSocial/basicas/Perfil.js";
import { getNumber, input } from "./utils.js";

class App {
    constructor(private _redeSocial: RedeSocial) {}

    showMenu() {
        const texto =
            `\t1 - Cadastrar novo perfil\n` +
            `\t2 - Criar nova postagem\n` +
            `\t3 - Exibir todos as postagens disponiveis de um perfil\n` +
            `\t4 - Exibir o feed de postagens\n` +
            `\t5 - Criar novo perfil\n` +
            `\t6 - Excluir Perfil\n`+
            `\t7 - Criar nova Postagem\n` +
            `\t8 - Excluir Postagem\n`+
            `\t7 - Curtir Postagem\n`+
            `\t8 - Descurtir Postagem\n`+
            `\t0 - Sair`;
        console.log(texto);
    }

    run() {
        // carregar perfis aqui e postagens
        let opcao: number;
        do {
            this.showMenu();

            opcao = getNumber("\nSelecione a opção: ");

            switch (opcao) {
                case 1:
                    console.log("\nCadastrar perfil\n")
                    let id: number = getNumber('id: ')
                    let nome: string = input('nome: ').trim()
                    let email: string = input('email: ').trim()

                    let perfil: Perfil = new Perfil(id, nome, email)
                    redeSocial.incluirPerfil(perfil)

                    console.log('Perfil incluido com sucesso!')
                    break;
                case 2:
                    console.log("\nCriar nova postagem\n")
                    let idPost: number = getNumber('id da postagem: ')
                    let tipo = input('Tipo de postagem: ').toLocaleLowerCase()

                    let postagem: Postagem
                    if (tipo == 'normal') {
                    }

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

const redeSocial: RedeSocial = new RedeSocial();
const app: App = new App(redeSocial);
app.run();
