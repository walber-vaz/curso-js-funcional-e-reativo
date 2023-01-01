const path = require('path')
const {
  lerDir,
  elementosTerminadosCom,
  lerArquivos,
  removeSeVazio,
  removeSeIncluir,
  removeSeNumeros,
  removeSimbolos,
  separarTextoPor,
  mesclaConteudos,
  agruparElementos,
} = require('./funcoes')

const caminho = path.join(__dirname, '../..', 'dados', 'legendas')

const simbolos = [
  '.',
  '?',
  '-',
  ',',
  '"',
  '♪',
  '_',
  '<i>',
  '</i>',
  '\r',
  '[',
  ']',
  '(',
  ')',
  "'",
]

lerDir(caminho)
  .then((arquivos) => elementosTerminadosCom(arquivos, '.srt'))
  .then((arquivosSRT) => lerArquivos(arquivosSRT))
  .then(mesclaConteudos)
  .then(separarTextoPor('\n'))
  .then((linhas) => removeSeVazio(linhas))
  .then(removeSeIncluir('-->'))
  .then((linhas) => removeSeNumeros(linhas))
  .then(removeSimbolos(simbolos))
  .then(mesclaConteudos)
  .then(separarTextoPor(' '))
  .then((linhas) => removeSeVazio(linhas))
  .then((linhas) => removeSeNumeros(linhas))
  .then(agruparElementos)
  .then(console.log)
