## 1. Assinale verdadeiro ou falso:

a. ( ) Objetos são modelos para classes<br>  
b. ( ) Atributos de uma classe devem ser obrigatoriamente inicializados para que as classes compilem<br>  
c. ( ) Uma variável declarada dentro de um método deve ser inicializada para que a classe seja compilável<br>  
d. ( ) Construtores são rotinas especiais que servem para inicializar e configurar os objetos no momento da instanciação<br>  
e. ( ) Construtores não possuem tipo de retorno e podem ou não ter parâmetros<br>  
f. ( ) Uma classe pode ter várias instâncias.<br>

```Resposta: a - f, b - v, c - f, d - v, e - v, f - v.  

Justificativa:
a - f: Classes são modelos para objetos.
b - v: Atributos de uma classe precisam ser inicializados.
c - f: Variáveis declaradas dentro de um método não precisam ser inicializadas.
d - v: Construtores são rotinas especiais que servem para inicializar e configurar os objetos no momento da instanciação. 
e - v: Construtores não possuem tipo de retorno e podem ou não ter parâmetros.
f - v: Uma classe pode ter várias instâncias.
```  
<br>

## 2. Suponha uma classe Hotel que sirva apenas para guardar a quantidade de solicitações de reservas feitas conforme abaixo:  

```typescript
class Hotel {
    qtdReservas: number;

    addReserva(): void {
        qtdReservas++;
    }
}
```
<br>
Podemos afirmar que haverá um problema de compilação, pois a variável inteira não foi inicializada previamente? Justifique.<br>


```Resposta:
Sim, pois a variável "qtdReservas" não foi inicializada previamente com um valor.
Além de estar sendo incrementada no método "addReserva", o que resulta na impossibilidade da execução do código.
Ademais é impossível localizar a variável "qtdReservas" sem a utilização do this.
```
<br>

## 3. Ainda sobre a classe do exemplo anterior, considere o código abaixo:

```typescript

class Hotel {
    qtdReservas: number;

    addReserva(): void {
        this.qtdReservas++;
    }
}

let hotel : Hotel = new Hotel(2);
console.log(hotel.qtdReservas); // 2
```
<br>
Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo qtdReservas.


```typescript
class Hotel {
    qtdReservas: number = 0;

    constructor(qtdReservas: number) {
        this.qtdReservas = qtdReservas;
    }

    addReserva(): void {
        this.qtdReservas++;
    }
}

let hotel: Hotel = new Hotel(2);
console.log(hotel.qtdReservas);
```
<br>

## 4. Considere a classe Radio e as instruções que fazem seu uso abaixo:

```typescript
class Radio {
    volume: number;
    constructor(volume: number) {
        this.volume = volume;
    }
}

let r: Radio = new Radio();
r.volume = 10;
```
Justifique o erro de compilação e proponha uma solução.<br>

Resposta:
O erro de compilação ocorre pois não foi passado nenhum parâmetro para o construtor da classe Radio. Para solucionar o problema, 
basta passar um parâmetro para o construtor, como por exemplo: 3.<br>

```typescript
class Radio {
    volume: number;

    constructor(volume: number) {
        this.volume = volume;
    }
}

let r: Radio = new Radio(3);
r.volume = 10;
```

## 5. Considerando o uso da classe Conta apresentada em aula e seu uso abaixo:

```typescript
class Conta {
    numero: string;
    saldo: number;

    sacar (valor: number): void {
        this.saldo -= valor;
    }
    
    depositar (valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo (): number {
        return this.saldo;
    }

    transferir (destino: Conta, valor: number): void {
        this.sacar(valor);
        destino.depositar(valor);
    }
}

let c1: Conta = new Conta("1", 100);
let c2: Conta = new Conta("2", 100);
let c3: Conta;

c1 = c2;
c3 = c1;

c1.sacar(10);
c1.transferir(c2, 50);

console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());
console.log(c3.consultarSaldo());
```
<br>

a. Qual o resultado dos dois (? não seriam três ?) "prints" ? Justifique sua resposta.<br>
b. O que acontece com o objeto para qual a referência c1 apontava ?<br>


```Resposta:
a. 90, 90, 90. Pois as variáveis c1, c2 e c3 apontam para o mesmo objeto.

b. O objeto para o qual a referência c1 apontava é perdido e é eliminado pelo Garbage Colector(GB) do javascript,
pois a variável c1 passa a apontar para o objeto para o qual a variável c2 apontava.
```
<br>

## 6. Crie uma classe chamada Saudacao que:
<ul> 
    <li>Contenha um atributo chamado texto e outro chamado destinatario, ambos do tipo String.</li>
    <li> Crie um construtor que inicializa os dois atributos</li>
    <li> Crie um método obterSaudacao( ) que retorne a concatenação dos dois atributos. Ex: "Bom dia, João"</li>
    <li> instancie uma classe Saudacao e teste seu método obterSaudacao( )</li>
</ul>
<br>

```typescript
class Saudacao {
    texto: string;
    destinatario: string;

    constructor (texto: string, destinatario: string) {
        this.texto = texto;
        this.destinatario = destinatario;
    }

    obterSaudacao(): string {
        return `\n${this.texto}, ${this.destinatario}`
    }
}

let s: Saudacao = new Saudacao("Bom dia", "Luiz.");
console.log(s.obterSaudacao());
```
<br>

## 7. Crie uma classe chamada Triangulo que:
<ul> 
    <li>Possua 3 atriutos representando os lados</li>
    <li>Crie um método que retorna true se os lados formarem um triângulo de acordo com a regra: |b-c| < a < b+c</li>
    <li>Crie 3 métodos: ehIsoceles(), ehEquilatero() e ehEscaleto() que retorne
        verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
        método. Eles devem chamar antes de tudo, o método da questão b. e
        retornar false se esse método já retornar false também</li>
    <li>Instancie classes Triangulo de diferentes lados e seus métodos.</li>
</ul>

<br>

```typescript
class Triangulo {
    l1: number;
    l2: number;
    l3: number;

    constructor (l1:number, l2: number, l3: number) {
        this.l1 = l1, this.l2 = l2, this.l3 = l3;
    }

    ehTriangulo(): boolean {
        return (this.l2 - this.l3) < this.l1 && this.l1 < (this. l2 + this.l3);
    }

    ehIsosceles(): boolean {
        return this.l1 == this.l2 || this.l2 == this.l3;
    }

    ehEquilatero(): boolean {
        return this.l1 == this.l2 && this.l2 == this.l3
    }

    ehEscaleno(): boolean {
        return this.l1 != this.l2 && this.l1 != this.l3 && this.l2 != this.l3
    }

    verificarTipoTriangulo(): string {
        if (this.ehTriangulo()) {
            if (this.ehEquilatero()){
                return "\nTriângulo Equilatero"
            }
            else if (this.ehIsosceles()){
                return "\nTriângulo Isosceles"
            }
            else if (this.ehEscaleno()){
                return "\nTriângulo Escaleno"
            }
        }
       
        return "\nNão forma triãngulo"
    }
}

const triangulo1: Triangulo = new Triangulo(1, 2, 3)
const triangulo2: Triangulo = new Triangulo(3, 2, 3)
const triangulo3: Triangulo = new Triangulo(3, 3, 3)

console.log(triangulo1.verificarTipoTriangulo())
console.log(triangulo2.verificarTipoTriangulo())
console.log(triangulo3.verificarTipoTriangulo())
```
<br>

## 8. Crie uma classe Equipamento com:
<ul>
    <li>a. Um atributo ligado (tipo boolean)</li>
    <li>b. Dois métodos liga() e desliga(). O método liga torna o atributo    
        ligado true e o método desliga torna o atributo ligado false.</li>
    <li>c. Crie um método chamado inverte(), que muda o status atual (se ligado,
        desliga...se desligado, liga)</li>
    <li>d. Crie um método que estaLigado() que retorna o valor do atributo ligado</li>
    <li>e. Altere o comportamento dos métodos liga para caso o equipamento já
        esteja ligado, não ligue novamente. Faça o mesmo com o método desligar.</li>
    <li>f. Instancie uma classe Equipamento e teste todos os seus métodos.</li>
</ul>

<br>

```typescript
class Equipamento {
    ligado: boolean;

    constructor (ligado: boolean) {
        this.ligado = ligado;
    }

    liga(): boolean {
        if (!(this.ligado)) return this.ligado = true;
        return this.ligado;
    }

    desliga(): boolean {
        if (this.ligado) return this.ligado = false;
        return this.ligado;
    }

    inverterEstado(): boolean {
        if (this.ligado) return this.ligado = false;
        return this.ligado = true;
    }

    estaLigado(): string {
        if (this.ligado) return "Ligado";
        return "Desligado";
    }
}

let equipamento: Equipamento = new Equipamento(false)
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`)

equipamento.liga()
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`)

equipamento.desliga()
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`)

equipamento.inverterEstado()
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`)
```

<br>

## 9. Altere a classe Conta dos slides conforme as instruções abaixo:
<ul>
    <li>Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o
        saque deixe saldo negativo, o mesmo não será realizado, retornando falso</li>
    <li>Altere o método transferir() para que retorne também um valor lógico e que
        não seja feita a transferência caso o sacar() na conta origem não seja satisfeito</li>
</ul>

<br>

```typescript
class Conta2 {
    numero: string; // = 0;
    saldo: number; // = 0;

    constructor (numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar (valor: number): boolean {
        if (this.saldo - valor < 0){
            return false
        }

        this.saldo -= valor
        return true
    }
    
    depositar (valor: number): void {
        this.saldo += valor;
    }

    consultarSaldo (): number {
        return this.saldo;
    }

    transferir (destino: Conta2, valor: number): any {
        if (!(this.sacar(valor))) {
            return false
        }

        this.sacar(valor);
        destino.depositar(valor);
        return true
    }
}

let conta1: Conta2 = new Conta2("111", 100);
let conta2: Conta2 = new Conta2("222", 100);

if (conta1.sacar(110)){
    console.log("Há um erro no código")
}
else {
    console.log("\nA operação não foi realizada.")
    console.log(`saldo da conta ${conta1.numero}: ${conta1.consultarSaldo()}`)
}

if (conta1.transferir(conta2,110)){
    console.log("\nHá um erro no código")
}
else {
    console.log("\nA operação não foi realizada")
    console.log(`saldo da conta ${conta2.numero}: ${conta1.consultarSaldo()}`)
}
```
<br>

## 10. Crie uma classe Jogador e nela:
<ul>
    <li>Crie 3 atributos inteiros representando força, nível e pontos atuais</li>
    <li>Crie um construtor no qual os 3 parâmetros são passados e inicialize os respectivos atributos</li>
    <li>Crie um método chamado calcularAtaque. Nele, calcule e retorne o valor da
        multiplicação de força pelo nível. Esse resultado é o dano de ataque do jogador</li>
    <li>Crie um método chamado atacar em que é passado um outro jogador (atacado) como parâmetro. 
        Nele e é feita a subtração do dano (método calcularAtaque) dos pontos do atacado</li>
    <li>Crie um método chamado estaVivo que retorna true caso o atributo pontos
        do jogador seja maior que zero e falso caso contrário.</li>
    <li>Altere o método atacar para usar o método está vivo e desconsiderar a
        operação, ou seja, não atacar, caso o jogador passado por parâmetro não
        esteja vivo.</li>
    <li>Crie um método chamado toString() que retorna a representação textual do
        produto concatenando todos os seus atributos.</li>
    <li>Avalie em com testes dois jogadores instanciados e inicializados através do
        construtor. Utilize o método de ataque de cada jogador e ao final, verifique
        qual jogador tem mais pontos.</li>
</ul>
<br>

```typescript
class Jogador {
    apelido: string;
    forca: number = 0;
    nivel: number = 0;
    xp: number = 0;

    constructor (nickname: string, power: number, level: number, xp: number) {
        this.apelido = nickname, this.forca = power, this.nivel = level, this.xp = xp;
    }

    calcularAtaque(): number {
        return this.forca * this.xp;
    }

    atacarJogador(jogadorAtacado: Jogador, dano: number): number {
        if (!(this.estaVivo(jogadorAtacado))){
            return 0;
        }

        return jogadorAtacado.xp -= dano;

    }

    estaVivo(jogador: Jogador): boolean {
        if (jogador.xp >= 0) {
            return true
        }

        return false
    }

    toString(): string {
        return `
        Apelido: ${this.apelido}
        Força: ${this.forca}
        Nível: ${this.nivel}
        Pontos Atuais: ${this.xp}\n`
    }

    determinarVencedor(jogador1: Jogador, jogador2: Jogador): string {
        if (jogador1.xp > jogador2.xp) return `\n${jogador1.apelido} tem mais pontos.`
        else if (jogador1.xp == jogador2.xp) return `\nEmpate.`
        return `\n${jogador2.apelido} tem mais pontos.`
    }
}

let jogador1: Jogador = new Jogador("Luiz", 4, 1, 6)
let jogador2: Jogador = new Jogador("Camila", 4, 1, 6)

console.log(jogador1.toString(), jogador2.toString())
jogador1.atacarJogador(jogador2, jogador1.calcularAtaque())
console.log(jogador1.determinarVencedor(jogador1, jogador2))
```
<br>

## 11. A abordagem da questão 5 é retornar códigos de erro ou acerto. Já a da questão 6.f. é desconsiderar a alteração. 
## Quais das duas você acha mais correta?Compare com seus códigos escritos em outras disciplinas.

```Resposta:
 Acho a abordagem de retornar códigos de erro ou acerto mais correta, tendo em vista que há um controle maior sobre o código.
 ```