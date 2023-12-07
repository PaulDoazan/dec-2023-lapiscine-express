const mockCoworkings = require('../mock-coworkings')
const mockUsers = require('../mock-users')
const bcrypt = require('bcrypt')

module.exports = (Coworking, User) => {
    mockCoworkings.forEach((element) => {
        const newCoworking = { ...element }
        Coworking.create(newCoworking)
            .then(() => { })
            .catch((error) => {
                console.log(error.message)
            })
    })

    mockUsers.forEach(user => {
        bcrypt.hash(user.password, 10)
            .then(hashResult => {
                User.create({ ...user, password: hashResult })
                    .then(() => { })
                    .catch((error) => {
                        console.log(error.message)
                    })
            })
    })
}

