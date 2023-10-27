import { Ingresso, IngressoVip} from "./ingresso"


function main() {
    let ingresso: Ingresso = new Ingresso(30)
    let ingressoVip: Ingresso = new IngressoVip(30, 10)

    ingresso.imprimirValor()
    ingressoVip.imprimirValor()
}

main()