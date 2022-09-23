// somar(3)(4)(5)
function somar(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3
    }
  }
}
console.log(somar(3)(4)(5))

// calcular(3)(7)(fn)
function calcular(num1) {
  return function(num2) {
    return function(fn) {
      if (typeof fn === 'function') {
        return fn(num1, num2)
      }
    }
  }
}

function som(num1, num2) {
  return num1 + num2
}

function mult(num1, num2) {
  return num1 * num2
}

function div(num1, num2) {
  return num1 / num2
}

console.log(calcular(3)(7)(mult))