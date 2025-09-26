const express = require('express')
const server = express()





//Parametros de consulta  = /hello?name=John&age=20
server.get("/hello", (req, res) => {

    const{ nome , idade } = req.query

    return res.json({
        title: "Hello World", 
        message: `Hello ${nome}!`, 
        idade: idade})
})


//Parametros de rota = /hello/John/20
server.get("/hello/:nome", (req, res) => {
    const nome = req.params.nome

    return res.json({
        title: "Hello World", 
        message: `Hello ${nome}`})
})



server.listen(3002)


