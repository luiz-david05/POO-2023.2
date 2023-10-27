import * as fs from 'fs';

function main() {
    lerResultadosMetas()
}

function calculaPercentual(resultados, meta) {
    return resultados / meta * 100;
}

function lerResultadosMetas() {
    const dados = fs.readFileSync('./dados.txt').toString().split('\n');
    for (let dado of dados) {
        let dadoArquivo = dado.split(';');
        let [resultado, meta] = dadoArquivo;
        
        console.log(`Cumprimento da meta(%): ${calculaPercentual(resultado, meta).toFixed(2)}`)
    }
}

main()