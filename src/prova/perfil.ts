import { Postagem } from "./postagem.js";

export class Perfil {
    constructor(private _id: number, private _nome: string, private _email: string, private _postagens: Array <Postagem>) {}

    get id() { return this._id; }
    get nome() { return this._nome; }
    get email() { return this._email;}
}