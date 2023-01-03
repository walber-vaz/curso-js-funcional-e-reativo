function ordenar(array) {
  return [...array].sort((a, b) => a - b)
}

// Forma de deixa arra umutavel

const nums = Object.freeze([3, 1, 7, 9, 4, 6])
// nums.sort() assim ele não altera dados do array
console.log(ordenar(nums))
console.log(nums)
