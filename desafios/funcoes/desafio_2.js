// somar(3)(4)(5)
const somar = (num1) => (num2) => (num3) => num1 + num2 + num3
console.log(somar(3)(4)(5))

// calcular(3)(7)(fn)
const calcular = (num1) => (num2) => (fn) => {
  if (typeof fn === 'function') {
    return fn(num1, num2)
  }
}

// const som = (num1, num2) => num1 + num2
const mult = (num1, num2) => num1 * num2
// const div = (num1, num2) => num1 / num2
console.log(calcular(3)(7)(mult))
