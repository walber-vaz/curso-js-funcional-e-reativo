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

const exagerado = composicao(falar, enfatizar, lento)

const resultado = exagerado('w2k')
console.log(resultado)
