export class Conta {
    constructor (private _nome: string, private _numero: string, private _saldo: number) {}

    public sacar (valor: number): void {
        if (this._saldo >= valor) {
            this._saldo -= valor
        }
    }
    
    public depositar (valor: number): void {
        this._saldo += valor;
    }
    
    public get saldo (): number {
        return this._saldo
    }
    
    public transferir (contaDestino: Conta, valor: number): void{
        this.sacar(valor)
        contaDestino.depositar(valor)
    }

    public get numero(): string {
        return this._numero
    }

    public get nome(): string {
        return this._nome
    }
}