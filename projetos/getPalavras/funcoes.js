const path = require('path')
const fs = require('fs')

const lerDir = (caminho) => {
  return new Promise((resolve, reject) => {
    try {
      const arquivos = fs.readdirSync(caminho)
      const arquivosCompletos = arquivos.map((arquivo) => {
        return path.join(caminho, arquivo)
      })
      resolve(arquivosCompletos)
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
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join(' ')
      }, el)
    })
  }
}

const separarTextoPor = (simbolo) => {
  return (texto) => {
    return texto.split(simbolo)
  }
}

const mesclaConteudos = (array) => array.join(' ')

const agruparElementos = (palavras) => {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const el = palavra.toLowerCase()
      const qtde = acc[el] ? acc[el].qtde + 1 : 1
      acc[el] = { elemento: el, qtde }
      return acc
    }, {})
  )
}

const ordernarPorAttrNumerico = (attr, ordem = 'asc') => {
  return (array) => {
    const asc = (obj1, obj2) => obj1[attr] - obj2[attr]
    const desc = (obj1, obj2) => obj2[attr] - obj1[attr]
    return array.sort(ordem === 'asc' ? asc : desc)
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
  separarTextoPor,
  mesclaConteudos,
  agruparElementos,
  ordernarPorAttrNumerico,
}
