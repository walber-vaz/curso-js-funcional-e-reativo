const path = require('path')
const fs = require('fs')

const lerDir = (caminho) => {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho)
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo))
      resolve(arquivos)
    } catch (error) {
      reject(error)
    }
  })
}

const lerArquivo = (caminho) => {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' })
      resolve(conteudo.toString())
    } catch (error) {
      reject(error)
    }
  })
}

const lerArquivos = (caminhos) => {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)))
}

const elementosTerminadosCom = (array, padrao) => {
  return array.filter((el) => el.endsWith(padrao))
}

const removeSeVazio = (array) => {
  return array.filter((el) => el.trim())
}

module.exports = {
  lerDir,
  elementosTerminadosCom,
  lerArquivo,
  lerArquivos,
  removeSeVazio,
}
