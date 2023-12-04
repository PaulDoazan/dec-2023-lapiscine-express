const express = require('express')
const router = express.Router()
// const { Op } = require('sequelize')
const { Coworking } = require('../db/sequelizeSetup')
let mockCoworkings = require('../mock-coworkings')

router
    .route('/')
    .get((req, res) => {
        console.log(req.query);
        Coworking.findAll()
            .then((results) => {
                res.json(results)
            })
            .catch(error => {
                res.json(error.message)
            })
    })
    .post((req, res) => {
        const newCoworking = { ...req.body }

        Coworking.create(newCoworking)
            .then((coworking) => {
                res.json({ message: 'Le coworking a bien été créé', data: coworking })
                console.log(coworking)
            })
            .catch((error) => {
                res.json({ message: `Le coworking n'a pas pu être créé`, data: error.message })
            })
    })

router
    .route('/:id')
    .get((req, res) => {
        Coworking.findByPk(parseInt(req.params.id))
            .then((result) => {
                console.log(result)
                if (result) {
                    res.json({ message: 'Un coworking a été trouvé.', data: result })
                } else {
                    res.json({ message: `Aucun coworking n'a été trouvé.` })
                }
            })
            .catch((error) => {
                res.json({ message: 'Une erreur est survenue.', data: error.message })
            })
    })
    .put((req, res) => {
        // let coworking = mockCoworkings.find((el) => el.id === parseInt(req.params.id))

        // let result;
        // if (coworking) {
        //     const newCoworking = { ...coworking, ...req.body }
        //     const index = mockCoworkings.findIndex(el => el.id === parseInt(req.params.id))
        //     mockCoworkings[index] = newCoworking
        //     result = { message: 'Coworking modifié', data: newCoworking }
        // } else {
        //     result = { message: `Le coworking n'existe pas`, data: {} }
        // }

        // res.json(result)
    })
    .delete((req, res) => {
        const coworking = mockCoworkings.find((el) => el.id === parseInt(req.params.id))

        let result;
        if (coworking) {
            mockCoworkings = mockCoworkings.filter(el => el.id !== coworking.id)
            result = { message: 'Coworking supprimé', data: coworking }
        } else {
            result = { message: `Le coworking n'existe pas`, data: {} }
        }

        res.json(result)
    })

module.exports = router