// Função .map => recebe uma função como parâmetro e retorna um array
const nums = [1, 2, 3, 4, 5]
const dobro = (n, i, a) => n * 2 + i + a.length

console.log(nums.map(dobro))

// Map não altera valores do array ele criar uma novo array
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']
const primeraLetra = (texto) => texto[0]
const letras = nomes.map(primeraLetra)

console.log(nomes, letras)

const carrinho = [
  { nome: 'Canete', qtde: 10, preco: 7.99 },
  { nome: 'Impressora', qtde: 0, preco: 649.5 },
  { nome: 'Caderno', qtde: 4, preco: 27.1 },
  { nome: 'Lapis', qtde: 3, preco: 5.82 },
  { nome: 'Tesoura', qtde: 1, preco: 19.2 },
]
// const nomesCarrinho = item => item.nome
// console.log(carrinho.map(nomesCarrinho))

// const qtdeTotal = qtdItems => qtdItems.qtde * qtdItems.preco
// const totais = carrinho.map(qtdeTotal)

// console.log(totais)

// Criando o map
Array.prototype.meuMap = function (fn) {
  const mapped = []
  for (let el = 0; el < this.length; el += 1) {
    mapped.push(fn(this[el], el, this))
  }
  return mapped
}

const nomesCarrinho = (item) => item.nome
console.log(carrinho.meuMap(nomesCarrinho))

const qtdeTotal = (qtdItems) => qtdItems.qtde * qtdItems.preco
const totais = carrinho.meuMap(qtdeTotal)

console.log(totais)
