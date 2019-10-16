/*console.log(typeof Object);

class Produto {}

console.log(typeof Produto);*/
// função sem retorno
function imprimirSoma(a, b){
    
    console.log(a + b)
    
}


imprimirSoma(5,5)

//função com retorno

function soma(a, b = 2){
    return a + b 
}

console.log(soma(2,7))

console.log(soma(2))


  