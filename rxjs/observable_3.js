const { Observable, noop } = require("rxjs");

// Criar um stream de números
// entre min e max com Observable
const entre = (min, max) => {
  if (min > max) {
    [min, max] = [max, min];
  }

  return new Observable((subscriber) => {
    Array(max - min)
      .fill()
      .map((_, i) => {
        subscriber.next(min + i);
      });
    subscriber.complete();
  });
};

entre(10, 4).subscribe({
  next(num) {
    console.log(`num = ${num}`);
  },
  complete() {
    console.log("Fim!");
  },
  error: noop,
});
