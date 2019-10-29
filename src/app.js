const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(proces.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

require('./model/Task')

app.use(require('./routes'))

app.listen(process.env.PORT || 3000)