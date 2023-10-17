class Produto {
    _id;
    _desc;
    _qtdProd;
    _valorUni;
    constructor(_id, _desc, _qtdProd, _valorUni) {
        this._id = _id;
        this._desc = _desc;
        this._qtdProd = _qtdProd;
        this._valorUni = _valorUni;
    }
    get id() {
        return this._id;
    }
    get desc() {
        return this._desc;
    }
    get qtdProd() {
        return this._qtdProd;
    }
    get valorUni() {
        return this._valorUni;
    }
    repor(qtd) {
        return this._qtdProd += qtd;
    }
    darBaixa(qtd) {
        if (this._qtdProd >= qtd) {
            this._qtdProd -= qtd;
            return true;
        }
        return false;
    }
}
class ProdutoPerecivel extends Produto {
    _dataValidade;
    constructor(id, desc, qtdProd, valorUni, _dataValidade) {
        super(id, desc, qtdProd, valorUni);
        this._dataValidade = _dataValidade;
    }
    get dataValidade() {
        return this._dataValidade;
    }
    ehValidado() {
        const dataAtual = new Date();
        return this.dataValidade >= dataAtual;
    }
    repor(qtd) {
        if (this.ehValidado()) {
            return super.repor(qtd);
        }
    }
    darBaixa(qtd) {
        if (this.ehValidado()) {
            super.darBaixa(qtd);
            return true;
        }
        return false;
    }
}
class Estoque {
    _produtos = [];
    qtdProdutos() {
        return this._produtos.length;
    }
    consultarIndice(id) {
        let indiceAlvo = -1;
        for (let i = 0; i < this.qtdProdutos(); i++) {
            if (this._produtos[i].id == id) {
                indiceAlvo = i;
                break;
            }
        }
        return indiceAlvo;
    }
    consultar(id) {
        let produtoAlvo;
        for (let produto of this._produtos) {
            if (produto.id == id) {
                produtoAlvo = produto;
                break;
            }
        }
        return produtoAlvo;
    }
    inserir(produto) {
        let indice = this.consultarIndice(produto.id);
        if (indice != -1) {
            return false;
        }
        this._produtos.push(produto);
        return true;
    }
    excluir(id) {
        let indice = this.consultarIndice(id);
        if (indice != -1) {
            for (let i = indice; i < this.qtdProdutos(); i++) {
                this._produtos[i] = this._produtos[i + 1];
            }
            this._produtos.pop();
            return true;
        }
        return false;
    }
    repor(id, qtd) {
        let indiceAlvo = this.consultarIndice(id);
        if (indiceAlvo != -1) {
            let produto = this._produtos[indiceAlvo];
            produto.repor(qtd);
            return true;
        }
        return false;
    }
    darBaixa(id, qtd) {
        let indiceAlvo = this.consultarIndice(id);
        if (indiceAlvo != -1) {
            let produto = this._produtos[indiceAlvo];
            produto.darBaixa(qtd);
            return true;
        }
        return false;
    }
    produtosVencidos() {
        console.log('\nProdutos fora da data de validade: ');
        for (let produto of this._produtos) {
            if (produto instanceof ProdutoPerecivel) {
                if (!produto.ehValidado())
                    console.log(this.toString(produto));
            }
        }
    }
    formatarData(data) {
        const ano = data.getFullYear();
        const mes = data.getMonth() + 1;
        const dia = data.getDate() + 1;
        const dataFormatada = `${ano}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;
        return dataFormatada;
    }
    toString(produto) {
        if (produto instanceof ProdutoPerecivel) {
            return `\nID: ${produto.id}\nDescrição: ${produto.desc}\nQuantidade em estoque: ${produto.qtdProd}` +
                `\nValor unitário: ${produto.valorUni.toFixed(2)}\nData de validade: ${this.formatarData(produto.dataValidade)}`;
        }
        return `\nID: ${produto.id}\nDescrição: ${produto.desc}\nQuantidade em estoque: ${produto.qtdProd}` +
            `\nValor unitário: ${produto.valorUni.toFixed(2)}`;
    }
}
// let bababoui: Estoque = new Estoque()
// bababoui.inserir(new Produto('001', 'Frigideira', 10, 57.90))
// bababoui.inserir(new ProdutoPerecivel('002', 'Arroz 5kg', 10, 5.5, new Date('2023-10-11')))
// bababoui.produtosVencidos()
