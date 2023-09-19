import { input } from "./entrada_utils"
import { Conta, Banco } from "./banco"

let nubank: Banco = new Banco()

function main() {
    let opcao: string = ""
    let i = 0
    do {
        console.log('\n1 - Cadastrar\t2 - Consultar\t3 - Sacar\n' +
        '\n4 - Depositar\t5 - Excluir\t6 - Transferir\n' +
        '\n7 - Totalizações\n' +
        '\n0 - Sair\n');
        opcao = input("Opção:");
        switch (opcao) {
            case "1":
                inserir();
                break
            case "2":
                // consultar();
                break
        }
        input("\nOperação finalizada. Digite <enter>...");
        
        i++;
        if (i >= 2) {
            console.clear()
        }

        } while (opcao != "0");
        console.log("Aplicação encerrada");

        tchau();
}


function inserir() {
    console.log("\nCadastrar Conta\n")
    let numero: string = input("Digite o numero da conta: ")

    let conta: Conta = new Conta(numero, 0)
    nubank.inserirConta(conta)
    console.log(nubank.toString(conta))
}


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
    const mensagemAleatoria =
        mensagens[Math.floor(Math.random() * mensagens.length)];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    console.log(
        `\n${corAleatoria}`,
        `${tchauAleatorio} \n"${mensagemAleatoria}"`
    )
};

main()