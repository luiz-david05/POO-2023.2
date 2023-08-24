1. Crie uma função que recebe como parâmetro um número e retorna true
   se o número for par e false se for ímpar.

```typescript
const ehPar = (n: number) => n % 2 === 0;
```

2. Crie uma função que recebe como parâmetro um número e retorna true
   se o número for primo e false caso contrário.

```typescript
const ehPrimo = (n: number) => {
    if (n <= 1) return false;

    let i = 2;

    while (i < n) {
        if (n % i === 0) return false;
        i++;
    }

    return true;
};
```

3. Crie uma função que receba como parâmetros um nome e um pronome de
   tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o
   valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”.

```typescript
const saudacao = (nome: string, pronome: string) => {
    if (pronome == "") {
        return `Olá Sr(a). ${nome}!`;
    }

    return `Olá ${pronome} ${nome}!`;
};
```

4. Crie uma função que retorne os números de um array
   passados por parâmetro separados por traço (-) no
   formato string. Para isso, use o método forEach dos
   arrays.

```typescript
const formatarArrayComDashes = (arr: number[]) => {
    let str = "";

    arr.forEach((num, index) => {
        if (index == arr.length - 1) {
            str += num;
        } else {
            str += num + "-";
        }
    });

    return str;
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(formatarArrayComDashes(numeros)); // 1-2-3-4-5-6-7-8-9
```

5. Dada a função soma abaixo, tente executar os scripts das alternativas e exiba os
   eventuais resultados:
   function soma(x: number, y?: any): number {
   return x + y
   }
   a. console.log(soma(1, 2));
   b. console.log(soma(1, "2"));
   c. console.log(soma(1));

```typescript
function soma(x: number, y?: any): number {
    return x + y;
}

console.log(soma(1, 2)); // 3
console.log(soma(1, "2")); // 12
console.log(soma(1)); // NaN
```

6. Crie uma função exibir receba como parâmetro um “rest parameter” representando
strings. A função deve exibir no log cada um dos elementos do “rest parameter”.
Chame a função usando diferentes quantidade de parâmetros conforme abaixo:
exibir(“a”, “b”);
exibir(“a”, “b”, “c”);
exibir(“a”, “b”, “c”, “d”);


```typescript
const exibir = (...args: string[]) => {
args.forEach(arg => console.log(arg));
}

exibir("a", "b"); // a b
exibir("a", "b", "c");// a b c
exibir("a", "b", "c", "d"); // a b c d
```

7. Converta em arrow function a seguinte função:
function ola() {
    console.log("Olá");
}

```typescript
const ola = () => console.log("Olá");
```

8. Dado método filter dos arrays, crie uma implementação usando arrow function que
filtre todos os elementos pares do array abaixo:

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

```typescript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const filtrarPares = (arr: number[]) => arr.filter(ehPar);
console.log(filtrarPares(array)); // [2, 4, 6, 8, 10, 12, 14]
```

9. Crie um exemplo usando a função map para dobrar os elementos de um array e
reduce para totalizar a soma dos elementos do array.

```typescript	
const dobrar = (arr: number[]) => arr.map(n => n * 2);
const somar = (arr: number[]) => arr.reduce((acc, curr) => acc + curr, 0);

const array2 = [1, 2, 3, 4, 5];
console.log(dobrar(array2)); // [2, 4, 6, 8, 10]
console.log(somar(array2)); // 15
```

10. Resolva o problema abaixo usando Map/Reduce e Objetos JavaScript com a
sintaxe TypeScript.

Processamento Avançado de Dados de Sensores em

uma Rede de Sensores IoT

Você faz parte de uma equipe de engenheiros responsáveis por processar
dados provenientes de uma vasta rede de sensores IoT (Internet of Things) instalados
em uma cidade inteligente. Cada sensor coleta informações sobre vários parâmetros
ambientais, como temperatura, umidade, níveis de poluição e ruído. A cada minuto, os
sensores enviam um conjunto de leituras para serem processados e agregados.
O desafio é criar um sistema de processamento de dados que consolide as
leituras dos sensores em estatísticas úteis, como a média, o máximo e o mínimo para
cada parâmetro ambiental em intervalos de tempo específicos. Além disso, é
necessário aplicar calibrações diferentes para cada sensor, que podem variar a cada
hora. Os dados brutos chegam em forma de um array de objetos, onde cada objeto
contém informações sobre o sensor, o tipo de leitura (temperatura, umidade, etc.), o
valor da leitura e o carimbo de data/hora.

Seu objetivo é criar um programa que utilize as funções map e reduce para
processar esses dados brutos e gerar um relatório detalhado que apresente
estatísticas agregadas para cada parâmetro ambiental, levando em consideração as
calibrações específicas de cada sensor e os intervalos de tempo desejados (por
exemplo, a cada hora).
Por fim, você deve produzir uma estrutura de dados que contenha os seguintes
resultados:

• Média das leituras;
• Valor máximo registrado;
• Valor mínimo registrado.
 
Isso é tudo por agora... Até a próxima!