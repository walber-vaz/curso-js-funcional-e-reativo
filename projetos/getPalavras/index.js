const path = require('path')
const { lerDir, elementosTerminadosCom, lerArquivos } = require('./funcaoes')

const caminho = path.join(__dirname, '../..', 'dados', 'legendas')

lerDir(caminho)
  .then((arquivos) => elementosTerminadosCom(arquivos, '.srt'))
  .then((arquivosSRT) => lerArquivos(arquivosSRT))
  .then(console.log)
