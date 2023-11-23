import Funcionario from "./q3";
class FolhaDePagamento {
    _pessoas = [];
    calcularPagamentos() {
        let salarioTotal = 0;
        for (let pessoa of this._pessoas) {
            if (pessoa instanceof Funcionario) {
                salarioTotal += pessoa.salario;
            }
        }
        return salarioTotal;
    }
    inserir(pessoa) {
        this._pessoas.push(pessoa);
    }
}
