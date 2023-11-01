import { Postagem } from "./Postagem.js";

export class Perfil {
    constructor(
        private _id: number,
        private _nome: string,
        private _email: string
    ) {}
    
    private _postagens: Postagem[] = [];

    get id() {
        return this._id;
    }
    get nome() {
        return this._nome;
    }
    get email() {
        return this._email;
    }

    get postagens() {
        return this._postagens
    }
}
