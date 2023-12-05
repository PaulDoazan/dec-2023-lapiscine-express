const { Coworking } = require('../db/sequelizeSetup')

const findAllCoworkings = (req, res) => {
    Coworking.findAll()
        .then((results) => {
            res.json(results)
        })
        .catch(error => {
            res.json(error.message)
        })
}

module.exports = { findAllCoworkings, findCoworkingByPk }