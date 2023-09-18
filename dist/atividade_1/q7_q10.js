// questão 7
class Retangulo {
    l1 = 0;
    l2 = 0;
    calculaArea() {
        return this.l1 * this.l2;
    }
    calcularPerimetro() {
        return 2 * (this.l1 + this.l2);
    }
}
// instanciação de objetos
let retangulo = new Retangulo();
retangulo.l1 = 10;
retangulo.l2 = 20;
console.log(`Àrea do retângulo = ${retangulo.calculaArea()}`);
console.log(`Périmetro do retãngulo = ${retangulo.calcularPerimetro()}`);
// questão 8
class Circulo {
    raio = 0;
    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
let circulo = new Circulo();
circulo.raio = 10;
console.log(`Área do círculo: ${circulo.calcularArea()}`);
console.log(`Périmetro do círculo: ${circulo.calcularPerimetro()}`);
// questão 9
class SituacaoFinanceira {
    valorCreditos = 0;
    valorDebitos = 0;
    calcularSaldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let situacaoFinanceira = new SituacaoFinanceira();
situacaoFinanceira.valorCreditos = 1000;
situacaoFinanceira.valorDebitos = 500;
console.log(`saldo: ${situacaoFinanceira.calcularSaldo()}`);
