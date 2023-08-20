
// transpilada com ES3

// questão 7
var Retangulo = /** @class */ (function () {
    function Retangulo() {
        this.l1 = 0;
        this.l2 = 0;
    }
    Retangulo.prototype.calculaArea = function () {
        return this.l1 * this.l2;
    };
    Retangulo.prototype.calcularPerimetro = function () {
        return 2 * (this.l1 + this.l2);
    };
    return Retangulo;
}());
// instanciação de objetos
var retangulo = new Retangulo();
retangulo.l1 = 10;
retangulo.l2 = 20;
console.log("\u00C0rea do ret\u00E2ngulo = ".concat(retangulo.calculaArea()));
console.log("P\u00E9rimetro do ret\u00E3ngulo = ".concat(retangulo.calcularPerimetro()));
// questão 8
var Circulo = /** @class */ (function () {
    function Circulo() {
        this.raio = 0;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * Math.pow(this.raio, 2);
    };
    Circulo.prototype.calcularPerimetro = function () {
        return 2 * Math.PI * this.raio;
    };
    return Circulo;
}());
var circulo = new Circulo();
circulo.raio = 10;
console.log("\u00C1rea do c\u00EDrculo: ".concat(circulo.calcularArea()));
console.log("P\u00E9rimetro do c\u00EDrculo: ".concat(circulo.calcularPerimetro()));
// questão 9
var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira() {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
    }
    SituacaoFinanceira.prototype.calcularSaldo = function () {
        return this.valorCreditos - this.valorDebitos;
    };
    return SituacaoFinanceira;
}());
var situacaoFinanceira = new SituacaoFinanceira();
situacaoFinanceira.valorCreditos = 1000;
situacaoFinanceira.valorDebitos = 500;
console.log("saldo: ".concat(situacaoFinanceira.calcularSaldo()));
