const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bordeaux_coworkings', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

sequelize.authenticate()
    .then(() => console.log('La connexion à la base de données a bien été établie.'))
    .catch(error => console.error(`Impossible de se connecter à la base de données ${error}`))

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json('Hello World !')
})

const coworkingRouter = require('./routes/coworkingRoutes')

app.use('/api/coworkings', coworkingRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})