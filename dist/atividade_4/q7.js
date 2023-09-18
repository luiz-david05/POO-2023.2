class Triangulo {
    l1;
    l2;
    l3;
    constructor(l1, l2, l3) {
        this.l1 = l1, this.l2 = l2, this.l3 = l3;
    }
    ehTriangulo() {
        return (this.l2 - this.l3) < this.l1 && this.l1 < (this.l2 + this.l3);
    }
    ehIsosceles() {
        return this.l1 == this.l2 || this.l2 == this.l3;
    }
    ehEquilatero() {
        return this.l1 == this.l2 && this.l2 == this.l3;
    }
    ehEscaleno() {
        return this.l1 != this.l2 && this.l1 != this.l3 && this.l2 != this.l3;
    }
    verificarTipoTriangulo() {
        if (this.ehTriangulo()) {
            if (this.ehEquilatero()) {
                return "\nTriângulo Equilatero";
            }
            else if (this.ehIsosceles()) {
                return "\nTriângulo Isosceles";
            }
            else if (this.ehEscaleno()) {
                return "\nTriângulo Escaleno";
            }
        }
        return "\nNão forma triãngulo";
    }
}
const triangulo1 = new Triangulo(1, 2, 3);
const triangulo2 = new Triangulo(3, 2, 3);
const triangulo3 = new Triangulo(3, 3, 3);
console.log(triangulo1.verificarTipoTriangulo());
console.log(triangulo2.verificarTipoTriangulo());
console.log(triangulo3.verificarTipoTriangulo());
