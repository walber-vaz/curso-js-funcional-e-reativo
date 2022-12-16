const path = require('path')
const { lerDir, elementosTerminadosCom } = require('./funcaoes')

const caminho = path.join(__dirname, '../..', 'dados', 'legendas')

lerDir(caminho)
  .then((arquivos) => elementosTerminadosCom(arquivos, '.srt'))
  .then(console.log)
