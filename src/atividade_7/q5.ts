class Produto {
    constructor(private _id: string, private _desc: string, private _qtdProd: number, private _valorUni: number) {}

    get id() {
        return this._id
    }

    get desc() {
        return this._desc
    }

    get qtdProd() {
        return this._qtdProd
    }

    get valorUni() {
        return this._valorUni
    }

    repor(qtd: number) {
        return this._qtdProd += qtd
    }

    darBaixa(qtd: number): boolean {
        if (this._qtdProd >= qtd) {
            this._qtdProd -= qtd
            return true
        }

        return false
    }
}


class ProdutoPerecivel extends Produto {
    constructor(id: string, desc: string, qtdProd: number, valorUni: number, private _dataValidade: Date) {
        super(id, desc, qtdProd, valorUni)
    }

    get dataValidade() {
        return this._dataValidade
    }

    ehValidado(): boolean {
        const dataAtual = new Date()
        return this.dataValidade >= dataAtual
    }

    repor(qtd: number) {
        if (this.ehValidado()) {
            return super.repor(qtd)
        } 
    }

    darBaixa(qtd: number): boolean {
        if (this.ehValidado()) {
            super.darBaixa(qtd)
            return true
        }

        return false
    }
}


class Estoque {
    private _produtos: Produto[] = []


    qtdProdutos(): number {
        return this._produtos.length
    }

    private consultarIndice(id: string): number {
        let indiceAlvo = -1;

        for (let i = 0; i < this.qtdProdutos(); i++) {
            if (this._produtos[i].id == id) {
                indiceAlvo = i
                break
            } 
        }

        return indiceAlvo
    }

    consultar(id: string): Produto {
        let produtoAlvo!: Produto;

        for (let produto of this._produtos) {
            if (produto.id == id) {
                produtoAlvo = produto
                break
            }
        }
        return produtoAlvo
    }

    inserir(produto: Produto): boolean {
        let indice = this.consultarIndice(produto.id)

        if (indice != -1) {
            return false
        }
        
        this._produtos.push(produto)
        return true
    }

    excluir(id: string): boolean {
        let indice = this.consultarIndice(id)

        if (indice != -1) {
            for (let i = indice; i < this.qtdProdutos(); i++) {
                this._produtos[i] = this._produtos[i + 1]
            }

            this._produtos.pop()
            return true
        }
        
        return false
    }

    repor(id: string, qtd: number):boolean {
        let indiceAlvo = this.consultarIndice(id)
        if (indiceAlvo != -1) {
            let produto: Produto = this._produtos[indiceAlvo]
            produto.repor(qtd)
            return true
        }

        return false
    }

    darBaixa(id: string, qtd: number): boolean {
        let indiceAlvo = this.consultarIndice(id)
        if (indiceAlvo != -1) {
            let produto: Produto = this._produtos[indiceAlvo]
            produto.darBaixa(qtd)
            return true
        }

        return false
    }

    produtosVencidos() {
        console.log('\nProdutos fora da data de validade: ')
        for (let produto of this._produtos) {
            if (produto instanceof ProdutoPerecivel){
                if (!produto.ehValidado())
                    console.log(this.toString(produto))
            }
        }

    }

    private formatarData(data: Date): string {
        const ano = data.getFullYear()
        const mes = data.getMonth() + 1
        const dia = data.getDate() + 1
        
        const dataFormatada = `${ano}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`
        
        return dataFormatada
    }

    toString(produto: Produto) {
        if (produto instanceof ProdutoPerecivel) {
            return `\nID: ${produto.id}\nDescrição: ${produto.desc}\nQuantidade em estoque: ${produto.qtdProd}` +
            `\nValor unitário: ${produto.valorUni.toFixed(2)}\nData de validade: ${this.formatarData(produto.dataValidade)}`
        }

        return `\nID: ${produto.id}\nDescrição: ${produto.desc}\nQuantidade em estoque: ${produto.qtdProd}` +
        `\nValor unitário: ${produto.valorUni.toFixed(2)}`
    }
}


// let bababoui: Estoque = new Estoque()
// bababoui.inserir(new Produto('001', 'Frigideira', 10, 57.90))
// bababoui.inserir(new ProdutoPerecivel('002', 'Arroz 5kg', 10, 5.5, new Date('2023-10-11')))
// bababoui.produtosVencidos()