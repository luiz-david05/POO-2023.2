import * as fs from 'fs';
class Conta {
    _numero;
    _saldo;
    constructor(numero, saldoInicial) {
        this._numero = numero;
        this._saldo = saldoInicial;
    }
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo = this._saldo - valor;
        }
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    /*
    obterSaldo(): number {
        return this.saldo;
    }
    */
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
}
class Banco {
    contas = [];
    CAMINHO_ARQUIVO = "./contas.txt";
    inserir(conta) {
        let contaConsultada = this.consultar(conta.numero);
        if (contaConsultada == null) {
            this.contas.push(conta);
        }
        else {
            console.log(`Conta ${conta.numero} já cadastrada`);
        }
    }
    consultar(numero) {
        let contaConsultada;
        for (let conta of this.contas) {
            if (conta.numero == numero) {
                contaConsultada = conta;
                break;
            }
        }
        return contaConsultada;
    }
    consultarPorIndice(numero) {
        let indice = -1;
        for (let i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    }
    alterar(conta) {
        let indice = this.consultarPorIndice(conta.numero);
        if (indice != -1) {
            this.contas[indice] = conta;
        }
    }
    excluir(numero) {
        let indice = this.consultarPorIndice(numero);
        if (indice != -1) {
            for (let i = indice; i < this.contas.length; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    }
    depositar(numero, valor) {
        let contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.depositar(valor);
        }
    }
    sacar(numero, valor) {
        let contaConsultada = this.consultar(numero);
        if (contaConsultada != null) {
            contaConsultada.sacar(valor);
        }
    }
    transferir(numeroCredito, numeroDebito, valor) {
        let contaCredito = this.consultar(numeroCredito);
        let contaDebito = this.consultar(numeroDebito);
        if (contaDebito && contaCredito) {
            contaDebito.transferir(contaCredito, valor);
        }
    }
    getTotalDepositado() {
        // solução 1
        let totalDepositado = this.contas.reduce((totalAcumulado, conta) => {
            return totalAcumulado + conta.saldo;
        }, 0);
        return totalDepositado;
        /* solução 2
        let totalDepositado: number = 0
        this.contas.forEach(conta => totalDepositado += conta.saldo);

        return totalDepositado;
        */
    }
    renderJuros(numero) {
        let conta = this.consultar(numero);
        if (conta instanceof Poupanca) {
            conta.renderJuros();
            // (conta as Poupanca).renderJuros();
            //(<Poupanca> conta).renderJuros()
        }
    }
    getTotalContas() {
        return this.contas.length;
    }
    getMediaDepositada() {
        return this.getTotalDepositado() / this.getTotalContas();
    }
    carregarDeArquivo() {
        const arquivo = fs.readFileSync(this.CAMINHO_ARQUIVO, 'utf-8');
        //const linhas: string[] = arquivo.split('\n');
        const linhas = arquivo.split('\r\n');
        console.log("Iniciando leitura de arquivo");
        for (let i = 0; i < linhas.length; i++) {
            let linhaConta = linhas[i].split(";");
            let conta;
            let tipo = linhaConta[2];
            if (tipo == 'C') {
                conta = new Conta(linhaConta[0], parseFloat(linhaConta[1]));
            }
            else if (tipo == 'CP') {
                conta = new Poupanca(linhaConta[0], parseFloat(linhaConta[1]), parseFloat(linhaConta[3]));
            }
            else if (tipo == 'CI') {
                conta = new ContaImposto(linhaConta[0], parseFloat(linhaConta[1]), parseFloat(linhaConta[3]));
            }
            this.inserir(conta);
            console.log(`Conta ${conta.numero} carregada`);
        }
        /*
                linhas.forEach(linha => {
                    let linhaConta: string[] = linha.split(";");
                    let conta!: Conta;
                    let tipo: string  = linhaConta[2];
                    if (tipo == 'C') {
                        conta = new Conta(linhaConta[0], parseFloat(linhaConta[1]));
                    } else if (tipo == 'CP') {
                        conta = new Poupanca(linhaConta[0], parseFloat(linhaConta[1]),parseFloat(linhaConta[3]));
                    } else if (tipo == 'CI') {
                        conta = new ContaImposto(linhaConta[0], parseFloat(linhaConta[1]),parseFloat(linhaConta[3]));
                    }
        
                    this.inserir(conta);
                    console.log(`Conta ${conta.numero} carregada`);
                    
        
        
                });*/
        console.log("fim do arquivo");
    }
    salvarEmArquivo() {
        console.log("Iniciando a gravação de contas em arquivo.");
        let stringContas = "";
        let linha = "";
        for (let conta of this.contas) {
            if (conta instanceof Poupanca) {
                linha = `${conta.numero};${conta.saldo};CP;${conta.taxaDeJuros}\r\n`;
            }
            else if ((conta instanceof ContaImposto)) {
                linha = `${conta.numero};${conta.saldo};CI;${conta.taxaDesconto}\r\n`;
            }
            else {
                linha = `${conta.numero};${conta.saldo};C\r\n`;
            }
            stringContas += linha;
        }
        //deleta os últimos \r\n da string que vai pro arquivo, evitando que grave uma linha vazia
        stringContas = stringContas.slice(0, stringContas.length - 2);
        fs.writeFileSync(this.CAMINHO_ARQUIVO, stringContas, 'utf-8');
        console.log("Contas salvas em arquivo.");
    }
}
class Poupanca extends Conta {
    _taxaDeJuros;
    constructor(numero, saldo, taxaDeJuros) {
        super(numero, saldo);
        this._taxaDeJuros = taxaDeJuros;
    }
    renderJuros() {
        let juros = this.saldo * this._taxaDeJuros / 100;
        this.depositar(juros);
    }
    get taxaDeJuros() {
        return this._taxaDeJuros;
    }
}
class ContaImposto extends Conta {
    _taxaDesconto;
    constructor(numero, saldo, taxaDesconto) {
        super(numero, saldo);
        this._taxaDesconto = taxaDesconto;
    }
    sacar(valor) {
        let valorDesconto = this.saldo * this._taxaDesconto / 100;
        super.sacar(valor + valorDesconto);
    }
    get taxaDesconto() {
        return this._taxaDesconto;
    }
}
/*
let b: Banco = new Banco();
//b.inserir(new Poupanca("222", 100, 0.5));
//b.renderJuros("222")
//b.salvarEmArquivo();
//console.log(b.consultar("222"));
b.carregarDeArquivo();
b.inserir(new Conta("777", 70));
b.inserir(new Poupanca("888", 80, 0.5));
b.inserir(new Poupanca("999", 90, 0.38));
b.salvarEmArquivo();

/*
b.inserir(new Conta("11111-1", 100));
b.inserir(new Conta("22222-2", 150));
b.inserir(new Conta("33333-3", 300));

b.transferir("11111-1", "22222-2", 71);
console.log(b.consultar("11111-1"));
console.log(b.consultar("22222-2"));
console.log(b.consultar("33333-3"));
console.log(b.getTotalDepositado());
console.log(b.getMediaDepositada());
*/
/*
let poupanca: Poupanca = new Poupanca("1-1",100, 0.5);

poupanca.depositar(100);

console.log(poupanca.saldo);
poupanca.renderJuros();
console.log(poupanca.saldo);


let conta1: Poupanca = new Poupanca("1-2",100, 0.5);
console.log(conta1 instanceof Poupanca);
console.log(conta1 instanceof Conta);
console.log(conta1 instanceof Object);

let banco: Banco = new Banco();
let conta2: Conta = new Conta("22222-2", 150);
banco.inserir(conta2);
banco.inserir(poupanca);
banco.inserir(conta1);

*/
export { Banco, Conta, Poupanca, ContaImposto };
