const path = require('path')
const { lerDir } = require('./funcaoes')

const caminho = path.join(__dirname, '../..', 'dados', 'legendas')

const arquivos = lerDir(caminho)

console.log(arquivos)
