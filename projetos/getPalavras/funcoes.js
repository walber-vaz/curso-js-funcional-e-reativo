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

const elementosTerminadosCom = (array, padraoTextual) => {
  return array.filter((el) => el.endsWith(padraoTextual))
}

const removeSeVazio = (array) => {
  return array.filter((el) => el.trim())
}

const removeSeIncluir = (padraoTextual) => {
  return (array) => {
    return array.filter((el) => !el.includes(padraoTextual))
  }
}

const removeSeNumeros = (array) => {
  return array.filter((el) => {
    const num = parseInt(el.trim())
    return !(num !== 0 && !!num)
  })
}

const removeSimbolos = (simbolos) => {
  return (array) => {
    return array.map((el) => {
      let novoText = el
      simbolos.forEach((simbolo) => {
        novoText = novoText.split(simbolo).join('')
      })
      return novoText
    })
  }
}

module.exports = {
  lerDir,
  elementosTerminadosCom,
  lerArquivo,
  lerArquivos,
  removeSeVazio,
  removeSeIncluir,
  removeSeNumeros,
  removeSimbolos,
}
