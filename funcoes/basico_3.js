// arrow function
const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal()

// Se estiver apenas um único parâmetro tiro os parenteses
const saudacao = (nome) => `Fala ${nome}!!!`
console.log(saudacao('w2k'))

// ... => e um Rest pega todo parâmetro passado e gera um array
const somar = (...numbers) => {
  let total = 0
  for (const number of numbers) {
    total += number
  }
  return total
}

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// const potencia = (base) => {
//   return (exp) => {
//     return Math.pow(base, exp);
//   }
// }
const potencia = (base) => (exp) => Math.pow(base, exp)
console.log(potencia(2)(10))

// this
Array.prototype.log = function () {
  console.log(this)
}
const numeros = [1, 2, 3]
numeros.log()
