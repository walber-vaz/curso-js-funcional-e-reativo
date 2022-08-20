# Código declarativo e imperativo

## Código Declarativo

Estilo de código declarativo ele não diz como ele diz oque.

## Código Imperativo

Estilo de código imperativo ele diz como deve ser feito.

### Imperativo

- Foco no Fluxo (Escreve muito como as coisa deve ser feitas)

- Estados Mutáveis (Altera os dados)

- Como (Explicar como cada passo deve ser feito)

- Maior quantidade de código

- Baixo nível de escalabilidade

- Mais conhecido

- Mais explícito

### Declarativo

- Foco na Lógica (Foco maior na logica mais também no fluxo)

- Imutabilidade (Não altera dados que existem)

- O que (No que precisa ser feito)

- Menor quantidade de código

- Alto nível de escalabilidade.

- Menos conhecido

- Menos explícito

### Imperativo ou Declarativo?

```sql
SELECT
    matricula, nome, email, media
FROM
    alunos
WHERE
    media >= 9

e Declarativo (Esta falando o que é não como)
```

### Código Declarativo

```html
<div class="content">
    <div class="row">
        <div class="title">
            <h1 class="shadow">{{ title }}</h1>
        </div>
    </div>
</div>
```

### Paradigma Imperativo

```js
const notas = [
    8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0
]

function media(notas) {
    let total = 0
    for (let i = 0; i < notas.length; i++) {
        total += notas[i]
    }

    return total / notas.length
}

const mediaTurma = media(notas)
console.log(`Média é ${mediaTurma}`)
```

### Paradigma Declarativo

```js
const notas = [
    8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0
]

const somar = (a, b) => a + b
const dividir = (a, b) => a / b

const mediaTurma = dividir(
    notas.reduce(somar),
    notas.length
)
console.log(`Média é ${mediaTurma}`)
```
