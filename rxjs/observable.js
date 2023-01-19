const { Observable } = require('rxjs');

/**
 * Com Promise NÃO e possível fazer stream de dados
 */
const promise = new Promise(resolve => resolve('Hello World!'));
promise.then(console.log);

/**
 * Com Observable é possível criar um fluxo de dados
 */
const obs = new Observable(subscriber => {
  subscriber.next('Hello World!');
  setTimeout(() => {
    subscriber.next('Hello Again!');
    // .complete() é necessário para encerrar o fluxo de dados
    subscriber.complete();
  }, 1000);
  subscriber.next('World!');
});
obs.subscribe(console.log);
