// Função contrutora
function Produto(name, price, desc = 0.15) {
  this.name = name
  this.price = price
  this._desc = desc

  this.priceFinal = function () {
    return this.price * (1 - this._desc)
  }
}

// Adicionar uma funcionalidade a função Produto que não existia
Produto.prototype.log = function () {
  console.log(`Nome: ${this.name} Preço: R$ ${this.price}`)
}

// Define uma propriedade no prototype do objeto
// Fazendo metodo Getters e Setters usando função
Object.defineProperty(Produto.prototype, 'desc', {
  // Getters
  get: function () {
    return this._desc
  },
  // Setters
  set: function (newDesc) {
    if (newDesc >= 0 && newDesc <= 1) this._desc = newDesc
  },
})

Object.defineProperty(Produto.prototype, 'descString', {
  // Getters
  get: function () {
    return `${this._desc * 100}% de desconto !`
  },
})

const p1 = new Produto('Caneta', 1.5)
console.log(p1.name)
p1.log()

const p2 = new Produto('Notebook', 11.5)
console.log(p2.price)
console.log(p2.priceFinal())
console.log(p2.desc)
p2.desc = 0.99
console.log(p2.descString)
