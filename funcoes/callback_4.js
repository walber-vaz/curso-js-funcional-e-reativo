const carrinho = [
  { nome: 'Canete', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
]

const getNome = (item) => item.nome
const qtdMaiorQueZero = (item) => item.qtde > 0
// const nomeItemsValidos = carrinho.filter(qtdMaiorQueZero).map(getNome)

// console.log(nomeItemsValidos)

// Meu Filter
Array.prototype.meuFilter = function (fn) {
  const novoArray = []

  for (let index = 0; index < this.length; index += 1) {
    if (fn(this[index], index, this)) {
      novoArray.push(this[index])
    }
  }

  return novoArray
}

const nomeItemsValidos2 = carrinho.meuFilter(qtdMaiorQueZero).map(getNome)
console.log(nomeItemsValidos2)
