const { Observable } = require('rxjs');

/**
 * Outra forma de criar um Observable mais esta depreciada
 */
const obs = Observable.create(subscriber => {
  subscriber.next('Hello World!');
  subscriber.next('World!');

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error('Error!');
  }
});

/**
 * O subscribe recebe 3 callbacks:
 * 1. next: recebe o valor emitido pelo Observable
 * 2. error: recebe o erro emitido pelo Observable
 * 3. complete: é chamado quando o Observable é completado
 */
// obs.subscribe(
//   valor => console.log(`Valor: ${valor}`),
//   error => console.log(`Error: ${error}`),
//   () => console.log('Fim!')
// );

/**
 * O subscribe também pode receber um objeto com os 3 callbacks
 * 1. next: recebe o valor emitido pelo Observable
 * 2. error: recebe o erro emitido pelo Observable
 * 3. complete: é chamado quando o Observable é completado
 */
obs.subscribe({
  next(valor) {
    console.log(`Valor: ${valor}`);
  },
  error(error) {
    console.log(`Error: ${error}`);
  },
  complete() {
    console.log('Fim!');
  }
});
