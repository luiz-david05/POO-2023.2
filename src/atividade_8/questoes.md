# Exercício 08 - Pesquisa exploratória

1) Identifique pelo menos 3 "erros" que acontecem quando você está programando com TypeScript que levam à parada brusca da execução de código.

``` Resposta:

1.1) Tentar comparar valores de tipos diferentes.

1.2) Esquecer de importar um módulo.

1.3) Tentar atribuir um valor diferente do tipo esperado.
```

2) O que é uma exceção em programação e como ela se diferencia de um erro comum ?

``` Resposta:

Uma exceção é um evento que ocorre durante a execução de um programa, que interrompe o fluxo normal das instruções. Já um erro comum é um erro que ocorre durante a execução de um programa, que interrompe o fluxo normal das instruções.
```

3) Como o TypeScript implementa o tratamento de exceções ?

``` Resposta:

O TypeScript implementa o tratamento de exceções através do uso de blocos try/catch/finally.

o try define o código a ser tentado (ou rodado), enquanto o catch define código a ser executado se uma exceção ocorrer, e o finally define o código a ser executado independentemente do resultado do bloco try/catch.
```

4) Qual é a função do bloco try-catch no tratamento de exceções em TypeScript ?

``` Resposta:

O blobo try catch é usado para lidar com erros em um bloco específico de código.

1. O try define o código a ser tentado (ou rodado).
2. Se o try não conseguir rodar, ele pula para o catch.

Em TypeScript, o parametro do catch é opcional, mas é uma boa prática usá-lo, pois ele é o objeto que contém informações sobre o erro. Alem disso o parametro do catch só pode ser do tipo any ou unknown.
```

5) Como você pode criar exceções personalizadas em TypeScript ?

``` Resposta:

Para criar uma exceção personalizada em TypeScript, é necessário criar uma classe que herda da classe Error, e definir o construtor da classe para receber uma mensagem de erro.

```
Exemplo:

``` TypeScript
class MeuErro extends Error {
    constructor(message: string) {
        super(message);
        // opcional 
        this.name = "MyError";
    }
}
```

6) Quais são os tipos comuns de exceções que podem ser encontradas em aplicações TypeScript ?

``` Resposta:
1. SyntaxError: Erro de sintaxe.
2. ReferenceError: Tentar acessar uma variável que não existe.
3. TypeError: Tentar acessar uma variável de um tipo que não existe.
4. RangeError: Tentar acessar um valor fora do range.
5. URIError: Tentar acessar uma URI inválida.
6. EvalError: Erro no eval().
7. InternalError: Erro interno no motor do JavaScript.
```

7) Qual o papel do bloco finally no tratamento de exceções em TypeScript ?

``` Resposta:

O finally sempre roda independente do bloco try/catch. 
O código dentro do finally sempre roda, mesmo se ocorrer um erro no bloco try/catch ou gerar um return.

O finally é opcional, mas é uma boa prática usá-lo, pois ele é usado para limpar recursos, como fechar um arquivo, fechar uma conexão de rede, etc.

Exemplo:
```

``` TypeScript
try {
    // código a ser tentado
}
catch(e: any) {
    // código a ser executado se ocorrer um erro
}
finally {
    // código a ser executado independente do resultado do bloco try/catch
}
```

8) Como o tratamento de exceções em TypeScript ajuda a melhorar a robustez e a segurança de uma aplicação ?

``` Resposta:

1. Possibilidade de criar exceções personalizadas, o que ajuda a desenvolver e debugar o código.
2. Possibilidade de tratar erros de forma mais eficiente, o que ajuda a melhorar a segurança da aplicação.
```

9) Existem diferenças significativas no tratamento de exceções entre TypeScript e JavaScript ?

``` Resposta:

Não, pois o TypeScript é um superset do JavaScript, ou seja, o TypeScript é um JavaScript com tipagem estática.
```

10) Como você pode testar e depurar eficientemente exceções em TypeScript ?

``` Resposta:

1. Usando o bloco try/catch/finally.
2. Usando o comando throw para lançar uma exceção.
3. Usando o comando throw para lançar uma exceção personalizada.
```