class Hora {
    constructor(private _hora: number, private _min: number, private _seg: number ) {}

    public get hora(): number {
        return this._hora;
    }

    public get min(): number {
        return this._min;
    }

    public get seg(): number {
        return this._seg;
    }

    public get horaFormatada(): string {
        return `\n${this.hora.toString().padStart(2, '0')}:${this.min.toString().padStart(2, '0')}:${this.seg.toString().padStart(2, '0')}`
    }
}

const hrAtual = new Date();
const horas = hrAtual.getHours()
const min = hrAtual.getMinutes()
const seg = hrAtual.getSeconds()

let relogio: Hora = new Hora(horas, min, seg);
console.log(relogio.hora)
console.log(relogio.min)
console.log(relogio.seg)
console.log(relogio.horaFormatada)