const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
      Olá 
      ${nome}!`// isso é uma template de string
console.log(concatenacao, template)
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('cuidado')}`)


let x = "toma no cu"

console.log(`Ei 
${x } seu lixo`)