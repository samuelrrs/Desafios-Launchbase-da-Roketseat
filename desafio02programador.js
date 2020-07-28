
const dev = {

    nome: "Samuel",
    idade: 22,

 tec : [
    { nome: 'C++', 
    especialidade: 'Desktop' },

    { nome: 'Python', 
    especialidade: 'Data Science' },

    { nome: 'JavaScript', 
    especialidade: 'Web/Mobile' }
]

}

console.log( `O usuário ${dev.nome} tem ${dev.idade} anos e usa a tecnlogia ${dev.tec[1].nome} com especialidade em ${dev.tec[1].especialidade}.`)