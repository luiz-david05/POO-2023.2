import {getNumber, input} from '../../atividade_5/banco/entrada_utils'
import {Conta, Banco} from './banco'

let nubank: Banco = new Banco()

function main() {
    let opcao: number
    menu()
    opcao = validarOpcao()
        
    while (opcao != 0) {
        if (opcao == 1) {
            inserir()
        }
        else if (opcao == 2) {
            consultar()
        }
        else if (opcao == 3) {
            sacar()
        }
        else if (opcao == 4) {
            depositar()
        }
        else if (opcao == 5) {
            excluir()
        }
        else if (opcao == 6) {
            transferir()
        }
        else if (opcao == 7) {
            totalizacoes()
        }

        input("\nAperte enter <- para continuar...")

        if (opcao == 0) {
            break;
        }

        limparTela()
        menu()
        opcao = validarOpcao()
    }

    console.log("\nAplicação encerrada!");
    tchau();
}


function menu() {
    console.log(
        '\n1 - Cadastrar\t2 - Consultar\t3 - Sacar\n' +
        '\n4 - Depositar\t5 - Excluir\t6 - Transferir\n' +
        '\n7 - Totalizações\n' +
        '\n0 - Sair\n'
        )
}

function validarOpcao() {
    let opcao: number =  getNumber("Opção: ")
    while (opcao < 0 || opcao > 7) {
        opcao = getNumber("Digite uma opção válida: ")
    }

    return opcao
}

function inserir() {
    console.log("\nCadastrar Conta\n")
    let nome: string = input("Digite o nome do titular da conta: ").trim()
    let numero: string = input("Digite o número do cpf: ").trim()

    let tentativasRestantes = 3
    while (!validarCPF(numero)) {
        console.log(`\nNumero de tentativas restantes: ${tentativasRestantes}`)
        numero = input("Digite um número de cpf válido: ")
        tentativasRestantes --;
        
        if (tentativasRestantes == 0) {
            console.log("Fim das tentativas!")
            break;
        }
    }

    let conta: Conta = new Conta(nome, numero, 0)
    nubank.inserirConta(conta)
}

function consultar() {
    console.log("\nConsultar Saldo\n")
    let numero: string = input("Digite o cpf: ")

    nubank.consultar(numero)
}

function sacar() {
    console.log("\nSacar valor da Conta\n")
    let numero: string = input("Digite o cpf do titular: ")
    let valor: number = getNumber("Digite o valor do saque: ")

    nubank.sacar(numero, valor)
}

function depositar() {
    console.log("\nDepositar valor na Conta\n")
    let numero: string = input("Digite o cpf do titular: ")
    let valor: number = getNumber("Digite o valor do deposito: ")

    nubank.depositar(numero, valor)
}

function excluir() {
    console.log("\nExcluir Conta\n")
    let numero: string = input("Digite o cpf do titular: ")

    nubank.excluirConta(numero)
}

function transferir() {
    console.log("\nTrânsferir entre Contas\n")
    let numOrigem: string = input("Digite o cpf do titular da conta de origem: ")
    let numDestino: string = input("Digite o cpf do titular da conta de destino: ")
    let valor: number = getNumber("Valor da trânsferencia: ")

    nubank.transferir(numOrigem, numDestino, valor)
}

function totalizacoes() {
    nubank.exibirContas()
    console.log(`\nQuantidade de contas no Banco: ${nubank.totalContas}`)
    console.log(`\nSaldo total do Banco: ${nubank.total.toFixed(2)}`)
    console.log(`\nValor médio do saldo das contas: ${nubank.mediaDepositada.toFixed(2)}`)
}


const tchaus = [
    "Tchau!",
    "Até mais!",
    "Até logo!",
    "Até amanhã!",
    "Até breve!",
];


const mensagens = [
    "Viver é o único dever que devemos aprender a cumprir.",
    "Não existe um caminho mais curto para a própria felicidade do que fazer a felicidade dos outros.",
    "O único tempo que temos é o presente. O passado se foi, o futuro ainda não chegou. Portanto, concentre-se no agora.",
    "A verdadeira sabedoria está em reconhecer a própria ignorância.",
    "A adversidade é um bom professor. Ela nos faz questionar nossas crenças e descobrir nossa força interior.",
    "A felicidade não reside em possuir muito, mas em desejar pouco.",
    "Não busque a aprovação dos outros. Seja verdadeiro consigo mesmo e viva de acordo com seus princípios.",
    "A maior riqueza é ter paz de espírito e contentamento com o que se tem.",
    "Aprenda a desapegar-se das coisas materiais, pois a verdadeira riqueza está na sabedoria e virtude.",
    "A felicidade não depende das circunstâncias externas, mas da forma como escolhemos reagir a elas.",
];


const cores = [
    "\x1b[31m%s\x1b[0m",
    "\x1b[32m%s\x1b[0m",
    "\x1b[33m%s\x1b[0m",
    "\x1b[37m%s\x1b[0m",
];


function valorAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
}


const tchau = () => {
    const tchauAleatorio = valorAleatorio(tchaus);
    const mensagemAleatoria = valorAleatorio(mensagens);
    const corAleatoria = valorAleatorio(cores);

    console.log(
        `\n${corAleatoria}`,
        `${tchauAleatorio} \n"${mensagemAleatoria}"`
    );
};


function limparTela() {
    let ask: string = input("\nLimpar tela? [Y]/[N]: ").toLowerCase()

    while (ask != "y" && ask != "n") {
        ask = input("\nLimpar tela? [Y]/[N]: ").toLowerCase()
    }

    if (ask == "y") {
        console.clear()
    }
}


function validarCPF(cpf: string) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1º digito	
	let add: number = 0;	
	for (let i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		let rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2º digito	
	add = 0;	
	for (let i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}


main()