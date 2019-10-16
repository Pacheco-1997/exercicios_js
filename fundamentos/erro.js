



function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    }catch (e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
    
}

const obj = {name: "Victor"}
imprimirNomeGritado(obj)


const obj2 = {marca: "Celta", placa:"77777777"}

console.log(obj2.marca)
