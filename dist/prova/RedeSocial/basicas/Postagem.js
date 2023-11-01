export class Postagem {
    _id;
    _texto;
    _likes;
    _deslikes;
    _data;
    _perfil;
    constructor(_id, _texto, _likes, _deslikes, _data, _perfil) {
        this._id = _id;
        this._texto = _texto;
        this._likes = _likes;
        this._deslikes = _deslikes;
        this._data = _data;
        this._perfil = _perfil;
    }
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
    get perfil() {
        return this._perfil;
    }
    curtir() {
        this._likes++;
    }
    descurtir() {
        this._deslikes++;
    }
    ehPopular() {
        return this._likes > 1.5 * this._deslikes;
    }
}
