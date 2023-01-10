const readline = require('readline')

// Padrão observer
function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise((resolve) => {
    rl.question(pergunta, (res) => {
      resolve(res)
      rl.close()
    })
  })
}

function namorada() {
  console.log('N: Apagar as luzes...')
  console.log('N: Pedir silêncio...')
  console.log('N: supresa!!!')
}

function sindico(event) {
  console.log('S: Monitorando o barulho!')
  console.log(`S: ${event.res}`)
  console.log(`S: ${event.data}`)
}

async function porteiro(interessados) {
  while (true) {
    const res = await obterResposta('O namorado chegou? (s/N/q) ')
    if (res.toLowerCase() === 's') {
      ; (interessados || []).forEach((obs) => obs({ res, data: Date.now() }))
    } else if (res.toLowerCase() === 'q') {
      break
    }
  }
}

porteiro([namorada, sindico])
