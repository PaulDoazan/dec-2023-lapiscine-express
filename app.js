const express = require('express')
//On construit une instance d'express 
const app = express()
const port = 3000

const arrNames = [
    {
        id: 12,
        name: "Paul",
        age: 35
    },
    {
        id: 15,
        name: "Pierre",
        age: 28
    }, {
        id: 6,
        name: "Mathilde",
        age: 19
    }
]

app.get('/', (req, res) => {
    res.send('Hello World !')
})

app.get('/names', (req, res) => {
    // Une requête ne peut renvoyer qu'une seule et unique réponse
    // D'abord, on créé une chaîne de caractères à partir des éléments du tableau, puis on la renvoie dans une réponse
    // => Paul et Pierre et Mathilde !
    let sentence = ""

    arrNames.forEach(name => {
        sentence += name + " "
    })

    sentence += "!"
    res.send(sentence)
})

app.get('/names/:id', (req, res) => {
    console.log(parseInt(req.params.id))
    // Implémenter le test pour sélectionner dans le tableau l'objet dont l'id correspond à l'id passé en paramètre d'url
    res.send(arrNames[req.params.id])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})