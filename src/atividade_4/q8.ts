class Equipamento {
    ligado: boolean;

    constructor (ligado: boolean) {
        this.ligado = ligado;
    }

    liga(): boolean {
        if (!(this.ligado)) return this.ligado = true
        return this.ligado
    }

    desliga(): boolean {
        if (this.ligado) return this.ligado = false
        return this.ligado
    }

    inverterEstado(): boolean {
        if (this.ligado) return this.ligado = false
        return this.ligado = true
    }

    estaLigado(): string {
        if (this.ligado) return "Ligado"
        return "Desligado"
    }
}

let equipamento: Equipamento = new Equipamento(false)
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`)

equipamento.liga()
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`)

equipamento.desliga()
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`)

equipamento.inverterEstado()
console.log(`\nEstado do equipamento: ${equipamento.estaLigado()}`)