class Cliente{  // iniciar a classe com letra maiuscula
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

const andre = new Cliente("André", "andre@email.com", "12312312312", 100);

//console.log(andre)

andre.depositar(50)
andre.exibirSaldo()