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