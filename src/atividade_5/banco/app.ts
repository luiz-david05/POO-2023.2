import { input, getNumber } from "./entrada_utils"
import { Conta, Banco } from "./banco"

let nubank: Banco = new Banco()
nubank.inserirConta(new Conta("081.232.321-76", 0, "Luiz"))
nubank.inserirConta(new Conta("092.131.998-86", 0, "Camila"))

function main() {
    let opcao: number
    let i = 0
    do {
        console.log('\n1 - Cadastrar\t2 - Consultar\t3 - Sacar\n' +
        '\n4 - Depositar\t5 - Excluir\t6 - Transferir\n' +
        '\n7 - Totalizações\n' +
        '\n0 - Sair\n');
        opcao = getNumber("Opção: ");
        switch (opcao) {
            case 1:
                inserir();
                break
            case 2:
                consultar();
                break
            case 3:
                sacar()
                break
            case 4:
                depositar()
                break
            case 5:
                excluir()
                break
            case 6:
                transferir()
                break
            case 7:
                totalizacoes()
                break
        }
        input("\nOperação finalizada. Digite <enter>...");
        
        i++;
        if (i >= 2) {
            console.clear()
        }

        } while (opcao != 0);

        console.log("Aplicação encerrada");
        tchau();
}


function inserir() {
    console.log("\nCadastrar Conta\n")
    let nome: string = input("Digite o nome do titular da conta: ").trim()
    let numero: string = input("Digite o número do cpf: ").trim()

    let tentativasRestantes = 2
    while (!validarCPF(numero)) {
        numero = input("Digite um número de cpf válido: ")
        console.log(`\nNumero de tentativas restantes: ${tentativasRestantes}`)
        tentativasRestantes --;

        if (tentativasRestantes > 1) {
            console.log("Fim das tentativas!")
            break;
        }
    }

    let conta: Conta = new Conta(numero, 0, nome)
    nubank.inserirConta(conta)
}

function consultar() {
    console.log("\nConsultar Saldo\n")
    let numero: string = input("Digite o cpf: ")

    nubank.consultarSaldo(numero)
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
    console.log(`\nQuantidade de contas no Banco: ${nubank.calcularQtdContas()}`)
    console.log(`\nSaldo total do Banco: ${nubank.calcularSaldoBanco().toFixed(2)}`)
    console.log(`\nValor médio do saldo das contas: ${nubank.mediaSaldo().toFixed(2)}`)
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