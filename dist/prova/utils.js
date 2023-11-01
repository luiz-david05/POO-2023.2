import { question } from "readline-sync";
export function input(texto) {
    let awnser = question(texto);
    return awnser;
}
export function getNumber(texto) {
    let n = Number(question(texto));
    while (isNaN(n)) {
        n = getNumber(texto);
    }
    return n;
}
// export class Utils {
//     input(texto: string) {
//         let awnser = question(texto);
//         return awnser;
//     }
//     getNumber(texto: string): number {
//         let n = Number(question(texto));
//         while (isNaN(n)) {
//             n = this.getNumber(texto);
//         }
//         return n;
//     }
// }
