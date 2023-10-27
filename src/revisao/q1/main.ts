import JogadorFutebol from "./jogador";

function main() {
    let jogador: JogadorFutebol = new JogadorFutebol("Dedé", "defesa", new Date('1988-7-1'), "Brasileiro", 1.92, "Destro", "aposentado")

    const idade = jogador.calcularIdadeJogador()
    console.log(`\nIdade do jogador: ${idade}`)

    if (jogador.status != 'aposentado') {
        const idadeMedia = jogador.calcularIdadeMedia()
        console.log(`\nTempo que falta para se aposentar: ${idadeMedia}`)
    }
    else {
        console.log(`\nJogador Aposentado`)
    }

    console.log(jogador.toString())
}

main()