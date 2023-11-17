import Pessoa from "./q2";
import Funcionario from "./q3";
import Professor from "./q4";

class FolhaDePagamento {
    private _pessoas: Pessoa[] = []

    calcularPagamentos(){
        let salarioTotal = 0
        for (let pessoa of this._pessoas) {
            if (pessoa instanceof Funcionario) {
                salarioTotal += pessoa.salario
            }
        }

        return salarioTotal
    }

    inserir(pessoa: Pessoa) {
        this._pessoas.push(pessoa)
    }
}