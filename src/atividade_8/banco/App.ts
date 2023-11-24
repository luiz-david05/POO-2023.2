import { Conta, Banco, Poupanca, ContaImposto } from "./Banco.js";
import * as fs from "fs";
import { input } from "./utils.js";
import { AplicacaoError } from "./erros/AplicacaoError.js";
import { ArquivoError } from "./erros/ArquivoError.js";
import { InputInvalidoError } from "./erros/InputInvalidoError.js";
import { CPFInvalidoError } from "./erros/CPFInvalidoError.js";

class App {
    private _banco = new Banco();

    static main() {
        let app = new App();
        app.run();
    }

    private carregarContas(): void {
        try {
        const contasArquivo: string[] = fs
            .readFileSync("contas.txt")
            .toString()
            .split("\n");

        contasArquivo.forEach((conta) => {
            const dadosConta = conta.split(";");

            const [tipo, numero, nome, saldo, taxa]: string[] = dadosConta;

            let novaConta: Conta

            if (tipo == 'C') {
                novaConta = new Conta(nome, numero, Number(saldo))
            } else if (tipo == 'P') {
                novaConta = new Poupanca(nome, numero, Number(saldo), Number(taxa))
            } else {
                novaConta = new ContaImposto(nome, numero, Number(saldo), Number(taxa))
            }

            this._banco.incluirConta(novaConta);
        });
        } catch {
            throw new ArquivoError("Erro ao carregar o arquivo!")
        }
    }
    
    private salvarContas(): void {
        try {
            const contas = this._banco.contas;
            
            const contasParaEscrever = contas.map((conta) => {
                return this._banco.arquivoToString(conta);
            });
            
            fs.writeFileSync("./contas.txt", "");
            
            fs.appendFileSync("./contas.txt", contasParaEscrever.join("\n"));
        } catch {
            throw new ArquivoError("Erro ao salvar o arquivo!")
        }
    }

    private validaCPF(cpf: string): void {
        cpf = cpf.replace(/[^\d]+/g, "");

        if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
            throw new CPFInvalidoError(
                "CPF inválido: formato incorreto ou todos os dígitos iguais."
            );
        }

        let add = 0;
        for (let i = 0; i < 9; i++) {
            add += parseInt(cpf.charAt(i)) * (10 - i);
        }
        let digito1 = 11 - (add % 11);
        digito1 = digito1 >= 10 ? 0 : digito1;
        if (digito1 !== parseInt(cpf.charAt(9))) {
            throw new CPFInvalidoError(
                "CPF inválido: primeiro dígito verificador incorreto."
            );
        }

        add = 0;
        for (let i = 0; i < 10; i++) {
            add += parseInt(cpf.charAt(i)) * (11 - i);
        }
        let digito2 = 11 - (add % 11);
        digito2 = digito2 >= 10 ? 0 : digito2;
        if (digito2 !== parseInt(cpf.charAt(10))) {
            throw new CPFInvalidoError(
                "CPF inválido: segundo dígito verificador incorreto."
            );
        }
    }

    private validaNome(nome: string) {
        if (!nome.trim() || nome.length > 100) {
            throw new InputInvalidoError(
                "Nome inválido: o comprimento deve estar entre 1 e 100 caracteres"
            );
        }

        if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(nome)) {
            throw new InputInvalidoError(
                "Nome inválido: caracteres não permitidos encontrados."
            );
        }
    }

    private validaTipo(tipo: string) {}

    criarConta(): void {
        const nome = input("Nome do titular: ");
        this.validaNome(nome);
        const cpf = input("Insira o CPF: ");
        this.validaCPF(cpf);
        const saldo = Number(
            input(
                "Insira o valor que deseja depositar para iniciar sua conta: "
            )
        );

        console.log(
            "Selecione o tipo de conta: [C] - Corrente, [P] - Poupança, [CI] - Imposto"
        );

        const tipo = input("Digite aqui: ");

        let conta: Conta;

        if (tipo == "C") {
            conta = new Conta(nome, cpf, saldo);
        } else if (tipo == "P") {
            conta = new Poupanca(nome, cpf, saldo, 0.5);
        } else if (tipo == "CI") {
            conta = new ContaImposto(nome, cpf, saldo, 0.25);
        } else {
            throw new InputInvalidoError("Tipo da conta inválido!");
        }

        this._banco.incluirConta(conta);

        console.log("Conta cadastrada com sucesso!")
        // console.log(this._banco.toString(conta))
    }

    exibirContas(): void{
        this._banco.exibirContasExistentes()
    }

    menu(): void {
        console.log("\nOpções disponíveis:");

        const texto =
            "\n\t1 - Criar Conta no Banco\n" +
            // '\n\t2 - Consultar conta com CPF do titulas' +
            // '\n\t3 - Realizar saque na conta' +
            // '\n\t4 - Realizar depósito na conta' +
            '\n\t4 - Contas Existentes no Banco\n' +
            '\t0 - sair\n'

        console.log(texto);
    }

    run(): void {
        console.log("Carregando dados da aplicação...");

        try {
            this.carregarContas();
        } catch(e: any) {
            console.log(e.message)
        } finally {
            console.log('\nDados carregados!')
        }

        input("\nTecle enter para continuar...");
        let opcao: number;
        
        do {
            this.menu();
            try {
                opcao = Number(input("Tecle a opcão correspondente: "));

                switch (opcao) {
                    case 0:
                        this.salvarContas();
                        break;
                    case 1:
                        this.criarConta();
                        break;
                    case 4:
                        this.exibirContas()
                        break
                }
            } catch (e: any) {
                console.log(
                    `\nNão foi possível concluir a operação!\n${e.message}`
                );
                if (!(e instanceof AplicacaoError)) {
                    console.log(
                        "Ops, este erro não foi reconhecido..., contate o administrador."
                    );
                }
            }
        } while (opcao != 0);

        console.log("\nAplicação encerrada.");
    }
}

App.main();