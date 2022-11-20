// Função contrutora
function Produto(name, price, desc = 0.15) {
  this.name = name
  this.price = price
  this.desc = desc

  this.priceFinal = function () {
    return this.price * (1 - this.desc)
  }
}

const p1 = new Produto('Caneta', 1.5)
console.log(p1.name)

const p2 = new Produto('Notebook', 11.5)
console.log(p2.price)
console.log(p2.priceFinal())
