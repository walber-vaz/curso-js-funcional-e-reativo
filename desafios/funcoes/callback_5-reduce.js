const carrinho = [
  { nome: 'Canete', qtde: 10, preco: 7.99, fragil: true },
  { nome: 'Impressora', qtde: 1, preco: 649.5, fragil: true },
  { nome: 'Caderno', qtde: 4, preco: 27.1, fragil: false },
  { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
  { nome: 'Tesoura', qtde: 1, preco: 19.2, fragil: true },
]

const isFragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
  const qtdTotal = acc.qtde + 1
  const totalNovo = acc.total + el
  return {
    qtde: qtdTotal,
    total: totalNovo,
    media: totalNovo / qtdTotal,
  }
}
const mediaInicial = { qtde: 0, total: 0, media: 0 }

const media = carrinho
  .filter(isFragil)
  .map(getTotal)
  .reduce(getMedia, mediaInicial)
  .media

console.log(`A média final dos produtos foram: R$${Math.floor(media)}`)