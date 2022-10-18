// Criar uma função que recebe 3 parâmetros sendo um uma função
// Essa função que e recebida e retornada
const exec = (fn, num1, num2) => fn(num1, num2)
const somarNoTerminal = (num1, num2) => console.log(num1 + num2)
const subtrairNoTerminal = (num1, num2) => console.log(num1 - num2)
const subtrair = (num1, num2) => num1 - num2

// Aqui chama a função exec passado como primeiro parâmetro uma função
// e outro os numero para vai passa para essa função que foi chamada no 1
exec(somarNoTerminal, 10, 10)
exec(subtrairNoTerminal, 10, 5)

const result = exec(subtrair, 50, 25)
console.log(result)

const fn = () => console.log('Exec...')
setInterval(fn, 1000)
