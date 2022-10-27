// setTimeout(() => {
//   console.log('Executando callback...')
//   setTimeout(() => {
//     console.log('Executando segundo callback...')
//     setTimeout(() => {
//       console.log('Executando terceira callback...')
//     }, 2000)
//   }, 2000)
// }, 2000)

const esperarPor = (tempo = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Executando promise...')
      resolve()
    }, tempo)
  })
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor())
