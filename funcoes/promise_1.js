// Promise precisar passar como parâmetro uma função
const p = new Promise((resolve) => resolve(['Ana', 'Bia', 'Carlos', 'Daniel']))

p.then((valor) => valor[0]) // Esta pegando primeiro elemento do retorno da Promise
  .then((primeiro) => primeiro[0]) // Esta pegando primeira letra do primeiro elemento
  .then((letra) => letra.toLowerCase()) // Esta pegando a primeira letra e tranformando em minusculas
  .then(console.log) // Esta mostrando a letra na tela
