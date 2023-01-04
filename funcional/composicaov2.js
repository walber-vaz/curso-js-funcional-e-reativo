const composicao = (...fns) => {
  return (valor) => {
    return fns.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc)
      } else {
        return fn(acc)
      }
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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(texto.split('').join(' '))
    }, 3000)
  })
}

const exagerado = composicao(falar, enfatizar, lento)
exagerado('PARA').then(console.log)
