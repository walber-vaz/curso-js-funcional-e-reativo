const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

// const exibirConteudo = (_, data) => console.log(data.toString());

// fs.readFile(caminho, {}, exibirConteudo);
fs.readFile(caminho, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});