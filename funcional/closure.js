/*
  Closure é quando uma função "lembra"
  seu escorpo lexico, mesmo quando a função
  é executada fora desse escopo léxico
*/
const somarXmais3 = require('./closure_escpo')
console.log(somarXmais3())
