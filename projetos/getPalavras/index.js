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

const agruparPalavras = (palavras) => {
  return palavras.reduce((acc, palavra) => {
    const p = palavra.toLowerCase()
    if (acc[p]) {
      acc[p] += 1
    } else {
      acc[p] = 1
    }
    return acc
  }, {})
}

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
  .then(agruparPalavras)
  .then(console.log)
