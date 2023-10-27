class Ingresso {
    _valor;
    constructor(_valor) {
        this._valor = _valor;
    }
    get valor() {
        return this._valor;
    }
    imprimirValor() {
        console.log(`\nValor do ingresso: R$ ${this.valor.toFixed(2)}`);
    }
}
class IngressoVip extends Ingresso {
    _valorAdicional;
    constructor(valor, _valorAdicional) {
        super(valor);
        this._valorAdicional = _valorAdicional;
    }
    get valorAdicional() {
        return this._valorAdicional;
    }
    valorIngressoVip() {
        return this.valor + this.valorAdicional;
    }
    // usando sobreescrita
    imprimirValor() {
        console.log(`\nValor do ingresso Vip: R$ ${this.valorIngressoVip().toFixed(2)}`);
    }
}
export { Ingresso, IngressoVip };
