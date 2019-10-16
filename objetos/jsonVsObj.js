const obj = {a: 1, b: 2, c: 3, soma(){ return a + b + c}}

console.log(JSON.stringify(obj))

// não é um formato JSON valido
//console.log(JSON.parse("{a:1,b:2,c:3}"))

// não é um formato JSON valido
//console.log(JSON.parse("{'a':1,'b':2,'c':3}"))

console.log(JSON.parse('{"a":1,"b":2,"c":3}'))

// outro formato json valido  valor numerico, strings entre aspas duplas, booleans, objetos entre chaves, e arrays
console.log(JSON.parse('{"a":1.7,"b": "string", "c": true, "d": {}, "e": []}'))






