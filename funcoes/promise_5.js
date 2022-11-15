const funcionarOuNao = (valor, chanceError) => {
  return new Promise((resolve, reject) => {
    try {
      if (Math.random() < chanceError) reject(new Error('Ocorreu um erro!'))
      resolve(valor)
    } catch (error) {
      reject(error)
    }
  })
}

funcionarOuNao('Testando...', 0.5)
  .then((valor) => console.log(`Valor: ${valor}`))
  .catch((err) => console.log(`Erro: ${err}`))
