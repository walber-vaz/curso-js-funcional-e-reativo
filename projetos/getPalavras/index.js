const path = require('path')
const {
  lerDir,
  elementosTerminadosCom,
  lerArquivos,
  removeSeVazio,
  removeSeIncluir,
  removeSeNumeros,
} = require('./funcoes')

const caminho = path.join(__dirname, '../..', 'dados', 'legendas')

lerDir(caminho)
  .then((arquivos) => elementosTerminadosCom(arquivos, '.srt'))
  .then((arquivosSRT) => lerArquivos(arquivosSRT))
  .then((conteudos) => conteudos.join('\n'))
  .then((todoConteudo) => todoConteudo.split('\n'))
  .then((linhas) => removeSeVazio(linhas))
  .then(removeSeIncluir('-->'))
  .then((linhas) => removeSeNumeros(linhas))
  .then(console.log)
