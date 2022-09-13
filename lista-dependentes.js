const cliente = {
    nome: "André",
    idade: 36,
    cpf: "58964712357",
    email: "andre@email.com",
    fones: ["55974563295", "559874637485"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNascimento: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNascimento: "04/01/2014"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento === "04/01/2014")

console.log(filhaMaisNova[0].nome)