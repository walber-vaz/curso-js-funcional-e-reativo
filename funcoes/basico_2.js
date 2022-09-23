function bomDia() {
  console.log('Bom dia!')
}

// Function expression => função anônima
const bomTarde = function() {
  console.log('Bom tarde!')
}

function executarQualQuerCoisa(fn) {
  if (typeof fn === 'function') {
    fn()
  }
}

executarQualQuerCoisa(bomDia)
executarQualQuerCoisa(bomTarde)

// Com retorna uma função a partir de outra função
function potencia(base) {
  return function(exp) {
    return Math.pow(base, exp)
  }
}

const bits8 = potencia(2)
console.log(bits8(8))

// Outra forma de passar parâmetro para funções sem criar uma variável
console.log(potencia(3)(4))