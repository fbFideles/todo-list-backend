const mongoose = require('mongoose')
const Task = mongoose.model('Task')

module.exports = {
    async index(req, res) {
        const tasks = await Task.find()

        return res.json(tasks)
    },

    async show(req, res) {
        const task = await Task.findById(req.params.id)

        return res.json(task)
    },

    async store(req, res) {
        const storedTask = await Task.create(req.body)
        
        return res.json(storedTask)
    },

    async update(req, res) {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            useFindAndModify: false
        })

        return res.json(updatedTask)
    },

    async destroy(req, res) {
        await Task.findByIdAndDelete(req.params.id, {
            useFindAndModify: false
        })

        return res.send()
    }
}