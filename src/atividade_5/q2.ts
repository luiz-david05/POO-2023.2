class Postagem {
    id: number;
    texto: string;
    qtdCurtidas: number;

    constructor (id: number, texto: string, qtdCurtidas: number) {
        this.id = id
        this.texto = texto
        this.qtdCurtidas = qtdCurtidas
    }

    curtir() {
        this.qtdCurtidas++
    }

    toString() {
        return `\nID: ${this.id}\nPostagem: ${this.texto}\nQuantidade de curtidas: ${this.qtdCurtidas}\n`
    }
}

// let postagem: Postagem = new Postagem(1, "Se inscreva no canal simpsom gamer, esse canal é bom demais!", 1000)

// for (let i = 0; i < 100; i++) {
//     postagem.curtir()
// }

// console.log(postagem.toString())


class Microblog {
    postagens: Postagem[] = []

    consultarPostPorIndice(id: number): number{
        let indiceAlvo = -1

        for (let i = 0; i < this.postagens.length; i++){
            if (this.postagens[i].id == id){
                indiceAlvo = i
                break
            }
        }

        return indiceAlvo
    }

    inserir(postagem: Postagem) {
        let indicePost = this.consultarPostPorIndice(postagem.id)

        if (indicePost != -1) {
            console.log("A postagem já existe!")
            return
        }

        this.postagens.push(postagem)
    }

    excluir(id: number) {
        let indicePost = this.consultarPostPorIndice(id)

        if (indicePost != -1){
            for (let i = indicePost; i < this.postagens.length; i++){
                this.postagens[i] = this.postagens[i+1]
            }

            this.postagens.pop()
        }
        else if (indicePost == -1) {
            console.log("Impossível excluir, postagem inexistente!")
        }
    }

    postagemMaisCurtida() {
        if (this.postagens.length === 0) {
            return 0;
        }
        
        let maisCurtida = this.postagens[0]
        for (let postagem of this.postagens) {
            if (postagem.qtdCurtidas > maisCurtida.qtdCurtidas){
                maisCurtida = postagem
            }
        }

        return maisCurtida
    }

    curtir(id: number) {
        let indicePost = this.consultarPostPorIndice(id)

        if (indicePost != -1) {
            let postagem: Postagem = this.postagens[indicePost]
            postagem.curtir()
        }
    }

    toString(): string {
        let textoPosts: string = ""
        for (let postagem of this.postagens) {
            textoPosts += postagem.toString()
        }

        return textoPosts
    }
    
}

let microblog: Microblog = new Microblog()
microblog.inserir(new Postagem(1, "Se inscreva no canal simpsom gamer, esse canal é bom demais", 1000))
microblog.inserir(new Postagem(2, "Vou bater o recorde mundial em ajudar homens, sou solidário, \najudei mais de 2050 homens", 0))
microblog.inserir(new Postagem(3, "Imigração não existe, partindo do pressuposto que delimitações de terra são imaginárias, o Estado opera com violência, pois sem a mesma não há Estado.", 10))
console.log(microblog.toString())
console.log(`Postagem com mais curtidas: ${microblog.postagemMaisCurtida()}`)