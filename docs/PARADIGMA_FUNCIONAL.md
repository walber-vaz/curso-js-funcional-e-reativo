# Paradigma Funcional

Dentro do paradigma funcional as funções são muito importantes e também são
tratadas como valores.

## Conceitos

- First Class Functions

- HOF (Higher Order Functions)

## Declaração Simples

```js
function dobro(x) {
    return x * 2
}

dobro(20)

```

## Função são valores

```js
const dobro = function(x) {
    return x * 2
}

dobro(20)
```

## Composição de funções

```js
const exagerado = composicao(
    gritar, // <- É uma função
    enfatizar, // <- É uma função
)

// exagerador também é uma função
exagerado('PARA')
```

## Exemplo Procedural

```js
const alunos = [
    { nome: 'Ana', nota: 9.5 },
    { nome: 'Bia', nota: 7.3 },
    { nome: 'Gil', nota: 5.8 },
    { nome: 'Leo', nota: 7.6 },
    { nome: 'Gui', nota: 9.1 },
    { nome: 'Lia', nota: 4.9 },
    { nome: 'Rui', nota: 7.0 },
]
const aprovados = []

for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 7) {
        aprovados.push(alunos[i])
    }
}

console.log(aprovados)
```

## Exemplo Funcional

```js
const alunos = [
    { nome: 'Ana', nota: 9.5 },
    { nome: 'Bia', nota: 7.3 },
    { nome: 'Gil', nota: 5.8 },
    { nome: 'Leo', nota: 7.6 },
    { nome: 'Gui', nota: 9.1 },
    { nome: 'Lia', nota: 4.9 },
    { nome: 'Rui', nota: 7.0 },
]
const estaAprovado = aluno => aluno.nota >= 7

const aprovados = alunos.filter(estaAprovado)
console.log(aprovados)
```

Como escreve código que você não vai modificar as coisas (imutabilidade)

## Por que Mudar?

- Programação funcional é mais simples;

  - Torna mais fácil de escrever e manter;

- Não possui acoplamento temporal;

- Poucos problemas de concorrência;

- Trabalha com imutabilidade;
