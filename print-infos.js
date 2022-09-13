const cliente = {
    nome: "André",
    idade: 36,
    cpf: "58964712357",
    email: "andre@email.com"
}

console.log(`O nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos, seu email é ${cliente.email}.`)

console.log(cliente.cpf.substring(0, 3))