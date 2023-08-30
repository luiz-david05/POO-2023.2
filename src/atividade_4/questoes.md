## 1. Assinale verdadeiro ou falso:

a. ( ) Objetos são modelos para classes<br>  
b. ( ) Atributos de uma classe devem ser obrigatoriamente inicializados para que as classes compilem<br>  
c. ( ) Uma variável declarada dentro de um método deve ser inicializada para que a classe seja compilável<br>  
d. ( ) Construtores são rotinas especiais que servem para inicializar e configurar os objetos no momento da instanciação<br>  
e. ( ) Construtores não possuem tipo de retorno e podem ou não ter parâmetros<br>  
f. ( ) Uma classe pode ter várias instâncias.<br>

```Resposta: a - f, b - f, c - f, d - v, e - v, f - v.  

Justificativa:
a - f: Classes são modelos para objetos.
b - f: Atributos de uma classe não precisam ser inicializados.
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

b. O objeto para o qual a referência c1 apontava é perdido e é eliminado pelo Garbage Colector(GB) do javascript, pois a variável c1 passa a apontar para o objeto para o qual a variável c2 apontava.
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