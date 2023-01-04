const pessoa = {
  nome: 'Walber',
  altura: 1.89,
  cidade: 'São Miguel do Guamá',
}

// Atribuição por referência
function alteraPessoa(novaPessoa) {
  novaPessoa.nome = 'w2k'
}

console.log(pessoa)
console.log(alteraPessoa(pessoa))
