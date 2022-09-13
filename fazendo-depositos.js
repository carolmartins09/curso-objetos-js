const cliente = {
    nome: "André",
    idade: 36,
    cpf: "58964712357",
    email: "andre@email.com",
    fones: ["55974563295", "559874637485"],
    dependentes: [
        {
        nome: "Sara",
        parentesco: "filha",
        dataNascimento: "20/03/2011" },
        {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNascimento: "04/01/2014"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)

cliente.depositar(30)

console.log(cliente.saldo)