class Hora {
    _hora;
    _min;
    _seg;
    constructor(_hora, _min, _seg) {
        this._hora = _hora;
        this._min = _min;
        this._seg = _seg;
    }
    get hora() {
        return this._hora;
    }
    get min() {
        return this._min;
    }
    get seg() {
        return this._seg;
    }
    get horaFormatada() {
        return `\n${this.hora.toString().padStart(2, '0')}:${this.min.toString().padStart(2, '0')}:${this.seg.toString().padStart(2, '0')}`;
    }
}
const hrAtual = new Date();
const horas = hrAtual.getHours();
const min = hrAtual.getMinutes();
const seg = hrAtual.getSeconds();
let relogio = new Hora(horas, min, seg);
console.log(relogio.hora);
console.log(relogio.min);
console.log(relogio.seg);
console.log(relogio.horaFormatada);
