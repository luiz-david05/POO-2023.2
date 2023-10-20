import Funcionario from "./q3";
import Professor from "./q4";
class FolhaDePagamento {
    _pessoas = [];
    calcularPagamentos() {
        let salarioTotal = 0;
        for (let pessoa of this._pessoas) {
            if (pessoa instanceof Professor) {
                salarioTotal += pessoa.salario;
            }
            else if (pessoa instanceof Funcionario) {
                salarioTotal += pessoa.salario;
            }
        }
        return salarioTotal;
    }
    inserir(pessoa) {
        this._pessoas.push(pessoa);
    }
}
// let folhaDePagamento: FolhaDePagamento =  new FolhaDePagamento()
// folhaDePagamento.inserir(new Funcionario('Luiz', 'David', '0001', 1320))
// folhaDePagamento.inserir(new Professor('Camila', 'Torres', '0001', 4000, 'efetivo'))
// console.log(`\nTotal de salários dos funcionários e professores: ${folhaDePagamento.calcularPagamentos()}`)
