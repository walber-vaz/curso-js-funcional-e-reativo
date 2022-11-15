const gerarNumerosEntre = (min, max, noReapet) => {
  if (min > max) [max, min] = [min, max]

  return new Promise((resolve, reject) => {
    const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
    if (noReapet.includes(aleatorio)) {
      reject(new Error('Números repetido!'))
    } else {
      resolve(aleatorio)
    }
  })
}

const geraMegaSena = async (qtdNumeros) => {
  const numeros = []
  try {
    // eslint-disable-next-line no-unused-vars
    for (const _ of Array(qtdNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }

    // Para para sort() em palavras
    // const sorted = nomes.sort((a, b) => a.localeCompare(b))

    // Ordem decrescente b - a
    const sorted = numeros.sort((a, b) => a - b)
    return sorted
  } catch (err) {
    throw new Error(err.message)
  }
}

geraMegaSena(8).then(console.log).catch(console.log)
