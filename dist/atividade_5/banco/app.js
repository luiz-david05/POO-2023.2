import { input, getNumber } from "./entrada_utils";
import { Conta, Banco } from "./banco";
let bb = new Banco();
function main() {
    showMenu();
    let opcao = opcaoValida();
    while (opcao != 0) {
        if (opcao == 1) {
            inserir();
        }
        opcao = opcaoValida();
    }
}
function showMenu() {
    let menu = "1 - Cadastrar conta\t2 - Consultar conta\t3 - Realizar saque\n";
    menu += "\n4 - Realisar depósito\t5 - Excluir conta\tTransferir\n";
    menu += "\n7 - Totalizações\n";
    menu += "\n0 -  Sair\n";
    console.log(menu);
}
function opcaoValida() {
    let opcao = getNumber("\nDigite uma opção: ");
    while (opcao < 0 || opcao > 7) {
        console.log("\nOpção inválida!");
        opcao = getNumber("\nDigite uma opção: ");
    }
    return opcao;
}
const continuar = () => {
    let pergunta = input("\nDeseja continuar? (s/n) ");
    while (pergunta !== "s" && pergunta !== "n") {
        console.log("\nOpção inválida!");
        pergunta = input("\nDeseja continuar? (s/n) ");
    }
    if (pergunta === "n") {
        tchau();
        process.exit(0);
    }
    else {
        let pergunta2 = input("\nDeseja limpar a tela? (s/n) ");
        while (pergunta2 !== "s" && pergunta2 !== "n") {
            pergunta2 = input("\nDeseja limpar a tela? (s/n) ");
            if (pergunta2 !== "s" && pergunta2 !== "n") {
                console.log("\nOpção inválida!");
            }
        }
        if (pergunta2 == "s") {
            console.clear();
        }
    }
    return pergunta;
};
const tchau = () => {
    const tchaus = [
        "Tchau!",
        "Até mais!",
        "Até logo!",
        "Até amanhã!",
        "Até breve!",
    ];
    const mensagens = [
        "Viver é o único dever que devemos aprender a cumprir.",
        "Não existe um caminho mais curto para a \nprópria felicidade do que fazer a felicidade dos outros.",
        "O único tempo que temos é o presente. O \npassado se foi, o futuro ainda não chegou. Portanto, concentre-se no agora.",
        "A verdadeira sabedoria está em reconhecer \na própria ignorância.",
        "A adversidade é um bom professor. Ela nos \nfaz questionar nossas crenças e descobrir nossa força interior.",
        "A felicidade não reside em possuir muito, \nmas em desejar pouco.",
        "Não busque a aprovação dos outros. Seja \nverdadeiro consigo mesmo e viva de acordo com seus princípios.",
        "A maior riqueza é ter paz de espírito e \ncontentamento com o que se tem.",
        "Aprenda a desapegar-se das coisas materiais, \npois a verdadeira riqueza está na sabedoria e virtude.",
        "A felicidade não depende das circunstâncias externas, \nmas da forma como escolhemos reagir a elas.",
    ];
    const cores = [
        "\x1b[31m%s\x1b[0m",
        "\x1b[32m%s\x1b[0m",
        "\x1b[33m%s\x1b[0m",
        "\x1b[37m%s\x1b[0m",
    ];
    const tchauAleatorio = tchaus[Math.floor(Math.random() * tchaus.length)];
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    console.log(`\n${corAleatoria}`, `${tchauAleatorio} \n"${mensagemAleatoria}"`);
};
function inserir() {
    console.log("\nCadastrar conta\n");
    let numero = input("Digite o número da conta: ");
    let conta;
    conta = new Conta(numero, 0);
    bb.inserirConta(conta);
}
main();
