class Ingresso {
    constructor(private _valor: number) {}

    get valor() {
        return this._valor
    }

    imprimirValor() {   
        console.log(`\nValor do ingresso: R$ ${this.valor.toFixed(2)}`)
    }
}


class IngressoVip extends Ingresso {
    constructor(valor: number, private _valorAdicional: number) {
        super(valor)
    }
    
    get valorAdicional() {
        return this._valorAdicional
    }
    
    valorIngressoVip() {
        return this.valor + this.valorAdicional
    }
    
    // usando sobreescrita
    imprimirValor() {
        console.log(`\nValor do ingresso Vip: R$ ${this.valorIngressoVip().toFixed(2)}`)
    }
}


export {Ingresso, IngressoVip}