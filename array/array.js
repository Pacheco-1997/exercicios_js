console.log(typeof Array, typeof new Array, typeof [])

let aprovados  = new Array ('Bia', 'carlos', 'ana')
console.log(aprovados)

aprovados = ['Bia', 'carlos', 'ana']
let x = 0 


aprovados[3] = 'Paulo'
aprovados.push('Abia ')

do {
    
    console.log(aprovados[x])
    x++
}while(x<aprovados.length)

aprovados[9] = 'Lucas'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)
aprovados.sort()// ordena 
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])

aprovados = ['Bia', 'carlos', 'ana']

aprovados.splice(1,2,'Elemento1','Elemento2')

console.log(aprovados)

outroArray = ['x','y','z']

console.log(outroArray)

outroArray.splice(1,0,'cagada') // metodo splice adiciona, remove ou até remove e adiciona 
console.log(outroArray)