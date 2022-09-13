const cliente = {
    nome: "André",
    idade: 36,
    cpf: "58964712357",
    email: "andre@email.com",
    fones: ["55974563295", "559874637485"]
}

cliente.dependente = {
    nome: "Sara",
    parentesco: "filha",
    dataNascimento: "20/03/2011"
}

console.log(cliente)

cliente.dependente.nome = "Sara Silva"

console.log(cliente)