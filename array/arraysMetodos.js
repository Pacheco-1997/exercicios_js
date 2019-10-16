const piloto = ['Vettel', 'Alonso','Raikinnen','Massa']

console.log(piloto)

piloto.pop() // remove o ultimo elemento do array

console.log(piloto)

piloto.push('Verstapen')

console.log(piloto)

piloto.shift()// remove o primeiro item do array

console.log(piloto)

piloto.unshift('Victor') // adiciona item na primeira possicão

console.log(piloto)

piloto.splice(2,0,'Bottas','Massa')

console.log(piloto)

piloto.splice(3,1)

console.log(piloto)

const algunsPilotos1 = piloto.slice(2) // cria novo array a partir de um indice

console.log(algunsPilotos1)

const algunsPilotos2 = piloto.slice(1,4) 

console.log(algunsPilotos2)