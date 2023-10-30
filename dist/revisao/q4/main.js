import { Elevador } from "./elevador.js";
import { getNumber, input } from "../../atividade_5/banco/entrada_utils.js";
import { AplicacaoErro } from "./erros/AplicacaoErro.js";
function inicializar(capacidadeElevador, totalAndares) {
    try {
        let novoElevador = elevador.inicializar(capacidadeElevador, totalAndares);
    }
    catch {
        throw new AplicacaoErro('Erro ao criar o elevador.');
    }
    console.log(`Elevador criado com sucesso!`);
}
function entrar() {
}
function sair() {
}
function subir() {
}
function descer() {
}
const showMenu = () => {
    const texto = 'Selecione uma operação:\n' +
        `\t1 - Inicializar Elevador\n` +
        `\t2 - Entrar\n` +
        `\t3 - Sair\n` +
        `\t4 - Subir\n` +
        `\t5 - Descer\n`;
    console.log(texto);
};
let elevador = new Elevador(0, 0, 0, 0);
function main() {
    const opcoes = new Array(inicializar, entrar, sair, subir, descer);
    while (true) {
        showMenu();
        const opcao = getNumber('');
        let opcaoSelecionada;
        if (opcao != 0) {
            try {
                opcaoSelecionada = opcoes[opcao - 1];
            }
            catch (error) {
                console.log('Não foi possível realizar a operação.\n' + error.mensagem);
                if (!(error instanceof AplicacaoErro)) {
                    console.log('Erro não conhecido!');
                }
            }
        }
        else {
            break;
        }
        input('Enter para continuar...');
        console.log('\n\n\n\n\n\n');
    }
}
main();
