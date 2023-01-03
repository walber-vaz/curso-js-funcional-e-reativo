let qtdExec = 0

// Função pura
function somarDoisNumeros(a, b) {
  qtdExec += 1 // tornou ela impura
  return a + b
}

console.log(somarDoisNumeros(1, 1))
console.log(somarDoisNumeros(1, 1))
console.log(somarDoisNumeros(1, 1))
console.log(qtdExec)
