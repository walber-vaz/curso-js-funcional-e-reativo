const composicao = (...fns) => {
  return (valor) => {
    return fns.reduce((acc, fn) => {
      return fn(acc)
    }, valor)
  }
}

const falar = (texto) => {
  return texto.toUpperCase()
}

const enfatizar = (texto) => {
  return `${texto}!!!`
}

const lento = (texto) => {
  return texto.split('').join(' ')
}

const resultado = composicao(falar, enfatizar, lento)('PARA')

console.log(resultado)
