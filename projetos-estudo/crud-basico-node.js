const express = require('express')
const server = express()

server.use(express.json())

let customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br"},
    { id: 2, name: "Google", site: "http://google.com"},
    { id: 3, name: "UOL", site: "http://uol.com.br"}
]

//Lista todos os clientes
server.get("/customers", (req, res) => {
    return res.json(customers)
})

//Retorna um cliente específico
server.get("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const customer = customers.find(item => item.id === id)
    const status = customer ? 200 : 404

    return res.status(status).json(customer)
})

//Adicionar um Cliente
server.post("/customers", (req, res) => {
    const { name, site} = req.body
    const id = Date.now()

    const newCustomer = { id, name, site}
    customers.push(newCustomer)

    return res.status(201).json(newCustomer)
})


//Edita um cliente
server.put("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const { name, site } = req.body

    const index = customers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404

    if(index >= 0){
        customers[index] = {id: parseInt(id), name, site}
    }

    return res.status(status).json(customers[index])
})

server.delete("/customers/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = customers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404

    if (index >=0) {
        customers.splice(index, 1)
    }

    return res.status(status).json()
})

server.listen(3002)


