import { Ingresso, IngressoVip } from "./ingresso";
function main() {
    let ingresso = new Ingresso(30);
    let ingressoVip = new IngressoVip(30, 10);
    ingresso.imprimirValor();
    ingressoVip.imprimirValor();
}
main();
