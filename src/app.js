const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const helmet = require('helmet')
const compression = require('compression')

const app = express()

app.use(cors())
app.use(express.json())

app.use(compression);   //decrease the size of the response body

app.use(helmet.hidePoweredBy());    //remove the X-Powered-By header
//app.use(helmet.hsts());   //sets Strict-Transport-Security header to force use https

mongoose.connect(`${process.env.MONGO_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 

require('./model/Task')

app.use(require('./routes'))

module.exports = app