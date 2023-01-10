function gerarNumeros() {
  return {
    iniciar(fn, intervalo = 1000) {
      let num = 0
      const interval = setInterval(() => {
        fn(num++)
      }, intervalo)

      return {
        parar() {
          clearInterval(interval)
        }
      }
    }
  }
}

const temp1 = gerarNumeros()
const exec1 = temp1.iniciar(numero => {
  console.log(`#1 => ${numero * 2}`)
})

const temp2 = gerarNumeros()
const exec2 = temp2.iniciar(a => {
  console.log(`#2 => ${a + 100}`)
}, 2000)

setTimeout(() => {
  exec1.parar()
  exec2.parar()
}, 10000)
