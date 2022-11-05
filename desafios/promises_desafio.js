const fs = require('fs')
const path = require('path')

const lerArquivos = (caminho) => {
  return new Promise((resolve) => {
    fs.readFile(caminho, (_, conteudo) => {
      resolve(conteudo.toString())
    })
    console.log('Ler depois')
  })
}

const caminho = path.join(__dirname, '../funcoes/dados.txt')

lerArquivos(caminho)
  .then((conteudo) => conteudo.split('\n'))
  .then((linhas) => linhas.join(','))
  .then((conteudo) => `O valor final é: ${conteudo}`)
  .then(console.log)
