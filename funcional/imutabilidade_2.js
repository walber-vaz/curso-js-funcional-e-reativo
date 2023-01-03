const nums = [4, 8, 3, 9, 2, 1]

// Usando recusividade
function somar(array, total = 0) {
  if (array.length === 0) {
    return total
  }
  return somar(array.slice(1), total + array[0])
}

console.log(somar(nums))

// Usando Reduce
// const somar = (a, b) => a + b
// const total = nums.reduce(somar)
// console.log(total)

// Dados mutavel
// let total = 0

// for (let index = 0; index < nums.length; index += 1) {
//   total += nums[index]
// }

// console.log(total)
