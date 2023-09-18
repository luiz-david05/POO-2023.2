class Postagem {
    id;
    texto;
    qtdCurtidas;
    constructor(id, texto, qtdCurtidas) {
        this.id = id;
        this.texto = texto;
        this.qtdCurtidas = qtdCurtidas;
    }
    curtir() {
        this.qtdCurtidas++;
    }
    toString() {
        return `\nID: ${this.id}\nPostagem: ${this.texto}\nQuantidade de curtidas: ${this.qtdCurtidas}\n`;
    }
}
// let postagem: Postagem = new Postagem(1, "Se inscreva no canal simpsom gamer, esse canal é bom demais!", 1000)
// for (let i = 0; i < 100; i++) {
//     postagem.curtir()
// }
// console.log(postagem.toString())
class Microblog {
    postagens = [];
    consultarPostPorIndice(id) {
        let indiceAlvo = -1;
        for (let i = 0; i < this.postagens.length; i++) {
            if (this.postagens[i].id == id) {
                indiceAlvo = i;
                break;
            }
        }
        return indiceAlvo;
    }
    inserir(postagem) {
        let indicePost = this.consultarPostPorIndice(postagem.id);
        if (indicePost != -1) {
            console.log("A postagem já existe!");
            return;
        }
        this.postagens.push(postagem);
    }
    excluir(id) {
        let indicePost = this.consultarPostPorIndice(id);
        if (indicePost != -1) {
            for (let i = indicePost; i < this.postagens.length; i++) {
                this.postagens[i] = this.postagens[i + 1];
            }
            this.postagens.pop();
        }
        else if (indicePost == -1) {
            console.log("Impossível excluir, postagem inexistente!");
        }
    }
    postagemMaisCurtida() {
        if (this.postagens.length === 0) {
            return 0;
        }
        let maisCurtida = this.postagens[0];
        for (let postagem of this.postagens) {
            if (postagem.qtdCurtidas > maisCurtida.qtdCurtidas) {
                maisCurtida = postagem;
            }
        }
        return maisCurtida;
    }
    curtir(id) {
        let indicePost = this.consultarPostPorIndice(id);
        if (indicePost != -1) {
            let postagem = this.postagens[indicePost];
            postagem.curtir();
        }
    }
    toString() {
        let textoPosts = "";
        for (let postagem of this.postagens) {
            textoPosts += postagem.toString();
        }
        return textoPosts;
    }
}
let microblog = new Microblog();
microblog.inserir(new Postagem(1, "Se inscreva no canal simpsom gamer, esse canal é bom demais", 1000));
microblog.inserir(new Postagem(2, "Vou bater o recorde mundial em ajudar homens, sou solidário, \najudei mais de 2050 homens", 0));
microblog.inserir(new Postagem(3, "A terra é plana ? Se fosse redonda se chamaria: Redondeta", 10));
console.log(microblog.toString());
console.log(`Postagem com mais curtidas: ${microblog.postagemMaisCurtida()}`);
