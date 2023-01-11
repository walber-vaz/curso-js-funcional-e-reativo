const { interval } = require('rxjs')

const gerarNumeros = interval(500)

const sub1 = gerarNumeros.subscribe(num => {
  console.log(Math.pow(2, num));
})

setTimeout(() => sub1.unsubscribe(), 8000);
