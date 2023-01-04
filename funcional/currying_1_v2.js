// currying
const soma = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c
    }
  }
}

console.log(soma(1)(2)(3))

const textoTamanhoEntre = (min) => {
  return (max) => {
    return (erro) => {
      return (texto) => {
        // Lazy Evaluation
        const tamanho = (texto || '').trim().length
        if (tamanho < min || tamanho > max) {
          throw erro
        }
      }
    }
  }
}

const forcarTamanhoPadrao = textoTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome do produto invalido!')

const p1 = {
  nome: 'A',
  preco: 14.99,
  desc: 0.25,
}

console.log(forcarNomeProdutoValido(p1.nome))
