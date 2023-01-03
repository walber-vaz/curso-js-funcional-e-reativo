/*
  Funçoes que operam em outras funções,
  tomando-se como argumentos ou retornando-se,
  são chamadas de HoF
*/
function exec(fn, ...params) {
  return function (textoInicial) {
    return `${textoInicial} ${fn(...params)}!`
  }
}

function somar(a, b, c) {
  return a + b + c
}

function mult(a, b) {
  return a * b
}

const result1 = exec(somar, 1, 2, 3)('O resultado da soma é:')
const result2 = exec(mult, 20, 3)('O resultado da multiplicação é:')

console.log(result1)
console.log(result2)
