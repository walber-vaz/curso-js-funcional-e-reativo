const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function gerarElementos(array) {
  return {
    iniciar(fn) {
      let indice = 0
      const interval = setInterval(() => {
        if (indice >= array.length) {
          clearInterval(interval)
        } else {
          fn(array[indice])
          indice++
        }
      }, 1000)
      return {
        parar() {
          clearInterval(interval)
        }
      }
    }
  }
}

const temp1 = gerarElementos(numeros)
const exec1 = temp1.iniciar(num => {
  console.log(Math.pow(2, num))
})

setTimeout(() => {
  exec1.parar()
}, 4000);
