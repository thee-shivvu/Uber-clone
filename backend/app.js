const dotenv = require('dotenv')
dotenv.config()
const ConnectDB = require('./src/db/db')
const userRoutes = require('./src/routes/user.routes')
const express = require('express')
const cors = require('cors')

const app = express()

ConnectDB();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hellow ')
})
app.use('/users', userRoutes)

module.exports = app