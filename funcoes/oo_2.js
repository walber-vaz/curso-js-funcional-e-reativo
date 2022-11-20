class Produto {
  // Função contrutora
  constructor(name, price, desc = 0.5) {
    this._name = name
    this.price = price
    this.desc = desc
  }

  // Metodo Setter
  set name(newName) {
    this._name = newName.toUpperCase()
  }

  // Metodo Getter
  get name() {
    return `Produto: ${this._name}`
  }

  // Se tenta passa um valor abaixo de 0
  // não vai atribuir no valor a constante
  set price(newPrice) {
    if (newPrice >= 0) this._price = newPrice
  }

  get price() {
    return this._price
  }

  // Quando usa get na frente da função
  // Faz ela se chamada como se fosse um atributo
  get priceFinal() {
    return this.price * (1 - this.desc)
  }
}

const p1 = new Produto('Caneta', 1.5)
p1.name = 'caneta'
p1.price = -20
console.log(p1.name)
console.log(p1.price)

const p2 = new Produto('Notebook', 11500, 0.8)
console.log(p2.price)
console.log(p2.priceFinal)
