/**
 * Diz-se que uma linguagem de programação possui
 * funções de primeira classes quando funçoes nessa
 * linguagem são tratadas como qualquer outra variavel.
 */
const y = 0
const x = () => {
  return y
}

console.log(x())
