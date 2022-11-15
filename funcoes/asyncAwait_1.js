const esperarPor = (tempo = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), tempo)
  })
}

// esperarPor(2000)
//   .then(() => console.log('Executando promise 1...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 2...'))
//   .then(esperarPor)
//   .then(() => console.log('Executando promise 3...'))

const retornaValor = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(10), 5000)
  })
}

const ex = async () => {
  const valor = await retornaValor()

  await esperarPor(1500)
  console.log(`Async/Await ${valor}...`)

  await esperarPor(1500)
  console.log(`Async/Await ${valor + 1}...`)

  await esperarPor(1500)
  console.log(`Async/Await ${valor + 2}...`)

  return valor + 3
}

ex().then(console.log)
