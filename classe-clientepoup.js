class Cliente{  
    constructor(nome, email, cpf, saldo){
        this.nome = nome,
        this.email = email,
        this.cpf = cpf,
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupança extends Cliente{
    constructor (nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupança("Andre", "andre@email.com", "12312312312", 100, 200);

andre.depositarPoupanca(50)
andre.depositar(100)

//console.log(andre)

andre.exibirSaldo()