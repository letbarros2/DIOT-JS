class contaBancaria{
    constructor(agencia, tipo, numero, saldo){
    this.agencia = agencia;
    this.tipo = tipo;
    this.numero = numero;
    this.saldo = saldo;
}
get agencia(){
    return this._agencia;
}
get tipo(){
    return this._tipo;
}
get numero(){
    return this._numero;
}
get saldo(){
    return this._saldo;
}

set agencia(agencia){
    this._agencia = agencia;
}

set tipo(tipo){
    this._tipo = tipo;
}

set numero(numero){
    this._numero = numero;
}

set saldo(saldo){
    this._saldo = saldo;
}
sacar(valor){
    if(valor > this._saldo){
        return "Operacação negada"
    }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
depositar(valor){
    this._saldo = this._saldo + valor;
    return this._saldo;

}    
}
class contaCOrrente extends contaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia,numero,saldo);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia,numero,saldo);
        this.tipo = 'poupanca';
    }

}
class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia,numero,saldo);
        this.tipo = 'universitaria';
    }
    sacar(valor){
        if(valor > 500){
            return "Operacação negada"
        }
            this._saldo = this._saldo - valor;
            return this._saldo;
        }

    }    
