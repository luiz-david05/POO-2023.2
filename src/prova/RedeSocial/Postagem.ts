import { Perfil } from "./Perfil.js";

export class Postagem {
    constructor(
        private _id: number,
        private _texto: string,
        private _likes: number,
        private _deslikes: number,
        private _data: Date,
        private _perfil: Perfil
    ) {}

    get id() {
        return this._id;
    }

    get texto() {
        return this._texto;
    }
    
    get likes() {
        return this._likes;
    }

    get deslikes() {
        return this._deslikes;
    }

    get data() {
        return this._data;
    }

    get perfil(): Perfil {
        return this._perfil;
    }

    curtir() {
        this._likes++;
    }

    descurtir() {
        this._deslikes++;
    }

    ehPopular(): boolean {
        return this._likes > 1.5 * this._deslikes;
    }
}
