export class RepositorioPerfis {
    _perfis = [];
    get perfis() {
        return this._perfis;
    }
    incluir(perfil) {
        // se retornar null o perfil ainda não existe e pode ser inserido no array de perfis
        if (this.consultar(perfil.id, perfil.nome, perfil.email) == null) {
            this._perfis.push(perfil);
            return true;
        }
        return false;
    }
    consultar(id, nome, email) {
        /* Realiza uma busca no array de perfis usando os parâmetros de pesquisa (id, nome e email).
           Se um perfil é encontrado no array que corresponde a qualquer um dos parâmetros,
           este perfil é retornado. Caso contrário, a função retorna null*/
        for (let perfil of this._perfis) {
            if ((id === null || perfil.id === id) &&
                (nome === null || perfil.nome === nome) &&
                (email === null || perfil.email === email)) {
                return perfil;
            }
        }
        return null;
    }
}
// let repositorio: RepositorioPerfis = new RepositorioPerfis();
// let perfil1: Perfil = new Perfil(1, "luiz david", "lddavid@exemplo.com");
// repositorio.incluir(perfil1);
// repositorio.incluir(new Perfil(1, "david", "lddavid@exemplo.com"));
// console.log(repositorio.perfis);
// console.log(repositorio.consultar(null, "carai", null));
