const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

require('dotenv/config')

app.use(cors())
app.use(express.json())

mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
require('./model/Task')

app.use(require('./routes'))

module.exports = app