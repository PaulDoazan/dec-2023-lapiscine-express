const { User } = require('../db/sequelizeSetup')

const findAllUsers = (req, res) => {
    User.findAll()
        .then((results) => {
            res.json(results)
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
}

const findUserByPk = (req, res) => {
    User.findByPk((parseInt(req.params.id)))
        .then((result) => {
            if (result) {
                res.json({ message: 'Un utilisateur a été trouvé.', data: result })
            } else {
                res.status(404).json({ message: `Aucun utilisateur n'a été trouvé.` })
            }
        })
        .catch((error) => {
            res.status(500).json({ message: 'Une erreur est survenue.', data: error.message })
        })
}

const createUser = (req, res) => {
    const newUser = { ...req.body }

    User.create(newUser)
        .then((User) => {
            res.status(201).json({ message: `L'utilisateur a bien été créé`, data: User })
        })
        .catch((error) => {
            res.status(500).json({ message: `L'utilisateur n'a pas pu être créé`, data: error.message })
        })
}

const updateUser = (req, res) => {
    User.findByPk(req.params.id)
        .then((result) => {
            if (result) {
                result.update(req.body)
                    .then(() => {
                        res.status(201).json({ message: `L'utilisateur a bien été mis à jour.`, data: result })
                    })
                    .catch(error => {
                        res.status(500).json({ message: 'La mise à jour a échoué.', data: error.message })
                    })
            } else {
                res.status(404).json({ message: `Aucun utilisateur à mettre à jour n'a été trouvé.` })
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Une erreur est survenue.', data: error.message })
        })
}

const deleteUser = (req, res) => {
    User.findByPk(req.params.id)
        .then((result) => {
            if (result) {
                result.destroy()
                    .then((result) => {
                        res.json({ mesage: `L'utilisateur a bien été supprimé.`, data: result })
                    })
                    .catch((error) => {
                        res.status(500).json({ mesage: `La suppression a échoué.`, data: error.message })
                    })
            } else {
                res.status(404).json({ mesage: `Aucun utilisateur trouvé.` })
            }
        })
        .catch((error) => {
            res.status(500).json({ mesage: `La requête n'a pas aboutie.` })
        })
}

module.exports = { findAllUsers, findUserByPk, createUser, updateUser, deleteUser }