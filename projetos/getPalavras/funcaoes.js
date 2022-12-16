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

const elementosTerminadosCom = (array, padrao) => {
  return array.filter((el) => el.endsWith(padrao))
}

module.exports = {
  lerDir,
  elementosTerminadosCom,
}
