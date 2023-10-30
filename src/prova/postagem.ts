import { Perfil } from "./perfil.js"


 export class Postagem {
    constructor(private _perfil: Perfil, private _texto: string, private _likes: number, private _deslikes: number, private _data: Date) {
    }

    get perfil(): Perfil { return this._perfil }
    get texto() { return this._texto }
    get likes() { return this._likes }
    get deslikes () { return this._deslikes }
    get data() { return this._data }

    curtir(): number { return this._likes++; }

    descurtir(): number { return this._deslikes--; }

    ehPopular(): boolean {
        if (this._likes > (this._deslikes * 0.5)) {
            return true
        }

        return false
    }
}