const path = require('path')
const fs = require('fs')

const lerDir = (caminho) => {
  const arquivos = fs.readdirSync(caminho)

  return arquivos.map((arquivo) => path.join(caminho, arquivo))
}

module.exports = {
  lerDir,
}
