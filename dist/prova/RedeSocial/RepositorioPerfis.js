import { PerfilJaExiste } from "./errors/PerfilJaExiste.js";
export class RepositorioDePerfis {
    _perfis = [];
    get perfis() {
        return this._perfis;
    }
    incluir(perfil) {
        if (this.consultar(perfil.id, perfil.nome, perfil.email) != null) {
            this._perfis.push(perfil);
        }
        else {
            throw new PerfilJaExiste(`O perfil com id "${perfil.id}", nome "${perfil.nome}" e email "${perfil.email}" já existe!`);
        }
    }
    consultar(id, nome, email) {
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
// const repositorio = new RepositorioDePerfis();
// const perfil1 = new Perfil(1, "Alice", "alice@example.com");
// const perfil2 = new Perfil(2, "Bob", "bob@example.com");
// repositorio.incluir(perfil1);
// // repositorio.incluir(perfil1)
// try {
//     repositorio.incluir(perfil1); 
// } catch (error) {
//     if (error instanceof PerfilJaExiste) {
//         console.error(error.message);
//     } else {
//         throw error;
//     }
// }
