const express = require('express')
const router = express.Router()

router
    .route('/')
    .get((req, res) => {
        res.json({ message: 'endpoint get users' })
    })
    .post((req, res) => {
        res.json({ message: 'endpoint post users' })
    })

router
    .route('/:id')
    .get((req, res) => {
        res.json({ message: 'endpoint get user by id' })
    })
    .put((req, res) => {
        res.json({ message: 'endpoint put user' })
    })
    .delete((req, res) => {
        res.json({ message: 'endpoint delete user' })
    })

module.exports = router