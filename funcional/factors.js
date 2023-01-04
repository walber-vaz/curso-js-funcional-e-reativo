// wrapper
const nums = [1, 2, 3, 4, 5, 6]

const novosNums = nums.map((el) => el + 10).map((el) => el * 2)

console.log(nums, novosNums)

function tipoSeguro(valor) {
  return {
    valor,
    invalido() {
      return this.valor === null || this.valor === undefined
    },
    map(fn) {
      if (this.invalido()) {
        return tipoSeguro(null)
      } else {
        return tipoSeguro(fn(this.valor))
      }
    },
  }
}

const result = tipoSeguro('Esse e um texto')
  .map((t) => t.toUpperCase())
  .map((t) => `${t} !!!`)
  .map((t) => t.split('').join(' '))
console.log(result.valor)
