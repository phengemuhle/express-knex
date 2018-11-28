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

app.listen(port, () => {
    console.log(`listening on ${port}`)
})