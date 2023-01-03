/*
  Uma função pura é uma função em que o valor
  de retorno é determinado apenas por seus valores
  de entrada, sem efeitos colaterais oberváveis
*/

const PICONST = 3.14

// Função impura
// Função se torna impura apatir do momento que depende de algum externo
// para ela funcionar
function areaCirc(raio) {
  return raio * raio * PICONST
}

console.log(areaCirc(10))

// Pura
function areaCircPura(raio, pi) {
  return raio * raio * pi
}

console.log(areaCircPura(10, Math.PI))
