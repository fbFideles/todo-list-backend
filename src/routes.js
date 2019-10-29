const express = require('express')
const TaskController = require('./controller/TaskController')
const routes = express.Router()

routes.get('/tasks', TaskController.index)
routes.get('/tasks/:id', TaskController.show)
routes.put('/tasks/:id', TaskController.update)
routes.post('/tasks', TaskController.store)
routes.delete('/tasks/:id', TaskController.destroy)

module.exports = routes