/* questão 7

class Retangulo {
    l1: number = 0;
    l2: number = 0;

    calculaArea(): number {
        return this.l1 * this.l2;
    }

    calcularPerimetro(): number {
        return 2 * (this.l1 + this.l2);
    }
}

// instanciação de objetos

let retangulo: Retangulo = new Retangulo();

retangulo.l1 = 10;
retangulo.l2 = 20;

console.log(`Àrea do retângulo = ${retangulo.calculaArea()}`)
console.log(`Périmetro do retãngulo = ${retangulo.calcularPerimetro()}`)


// questão 8

class Circulo {
    raio: number = 0;

    calcularArea(): number {
        return Math.PI * Math.pow(this.raio, 2);
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.raio;
    }
}

let circulo: Circulo = new Circulo();

circulo.raio = 10;

console.log(`Área do círculo: ${circulo.calcularArea()}`)
console.log(`Périmetro do círculo: ${circulo.calcularPerimetro()}`)


// questão 9

class SituacaoFinanceira {
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    calcularSaldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }
}

let situacaoFinanceira: SituacaoFinanceira = new SituacaoFinanceira();

situacaoFinanceira.valorCreditos = 1000;
situacaoFinanceira.valorDebitos = 500;

console.log(`saldo: ${situacaoFinanceira.calcularSaldo()}`)

*/