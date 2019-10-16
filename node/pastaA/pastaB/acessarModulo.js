/* aprendendo a usar a função require onde se importa modulos do node, modulos instalados especificos de um projeto usando
 npm, modulos internos do projeto */ 

 //const moduloA = require('C:\Users\Victor Pacheco\Desktop\exercicios-js\node\moduloA.js') caminho absoluto

 //caminho absoluto
 const moduloA = require('../../moduloA')  // referente ao nome do arquivo nos sistemas windows e mac não são case sensitive,
 // ou seja, tanto faz moduloA quanto moduloa, porem o linux é case sensitive, adotar como boas praticas sempre ser fiel
 // ao nome original
 console.log(moduloA.ola)

 const saudacao = require('saudacao')
 console.log(saudacao.ola)

 // http modulo interno do node

 const http = require('http')
 const c = require('./pastaC/')
 console.log(c.ola2)

 /*http.createServer((req, res) =>{
     res.write('Bom dia')
     res.end()
 }).listen(8080)*/