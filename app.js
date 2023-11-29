const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

const mockCoworkings = require('./mock-coworkings')

// middleware qui me permet d'interpréter le corps de ma requête (req.body) en format json
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.get('/api/coworkings', (req, res) => {
    // Afficher la phrase : Il y a ... coworkings dans la liste. 
    res.send(mockCoworkings)
})

app.get('/api/coworkings/:id', (req, res) => {
    let result = mockCoworkings.find(el => el.id === parseInt(req.params.id))

    if (!result) {
        result = `Aucun élément ne correspond à l'id n°${req.params.id}`
    }
    res.send(result)
})

// implémenter le endpoint post qui renvoie une réposne "post fonctionne"
app.post('/api/coworkings/', (req, res) => {
    // Ajouter le coworking dans le tableau, en automatisant la génération d'un id. On récupère le dernier élément du tableau et on ajoute +1 à son id.
    // let coworking = req.body

    const newId = mockCoworkings[mockCoworkings.length - 1].id + 1
    // let coworking = {id: newId, superficy : req.body.superficy, capacity : req.body.capacity, name: req.body.name}

    let coworking = { id: newId, ...req.body }

    mockCoworkings.push(coworking)
    res.send('Tout fonctionne dans le endpoint POST')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})