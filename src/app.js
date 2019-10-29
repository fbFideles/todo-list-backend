const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://root:root@node-api-cluster-mazf5.gcp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

require('./model/Task')

app.use(require('./routes'))

app.listen(process.env.PORT || 3000)