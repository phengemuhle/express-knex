const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const queries = require('./queries')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) => {
    queries.listAll().then(students => res.send(students))
})
app.get('/:id', (req,res) => {
    var { id } = req.params
    queries.getById(id).then(guy => res.send(guy))
})
app.post('/', (req,res) => {
    queries.createStudent(req.body).then(students => res.send(students[0]))
})
app.delete('/:id', (req,res) => {
    var { id } = req.params
    queries.deleteStudent(id).then(res.status(204).send("we done"))
})
app.put('/:id', (req,res) => {
    var { id } = req.params
    var  body = req.body
    queries.updateStudent(id, body).then(data => res.json(data[0]))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})