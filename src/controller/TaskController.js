const mongoose = require('mongoose')
const Task = mongoose.model('Task')

module.exports = {
  async index(req,res) {
    try {
      const tasks = await Task.find()

      return res.status(200).json(tasks)
    }
    catch(error) {
      return res.status(500).json({ message: 'api internal error could not get', error })
    }
  },
  
  async show(req, res) {
    try {
      const task = await Task.findById(req.params.id)

      if(task === null) {
        throw new Error("task not found try again")
      }

      return res.status(200).json(task)
    }
    catch(error) {
      return res.status(500).json({ message: `api internal error could not get: ${req.params.id}`, error })
    }
  },
    
  async store(req, res) {
    try {
      const storedTask = await Task.create(req.body)
      
      return res.status(200).json(storedTask)
    } 
    catch (error) {
      return res.status(500).json({ message: 'could not store a task', error })
    }
  },

  async update(req, res) {
    try {
      await Task.findByIdAndUpdate(req.params.id, req.body, {
        useFindAndModify: false
      })
  
      const updatedTask = await Task.findById(req.params.id)

      return res.status(200).json(updatedTask)
    } 
    catch (error) {
      return res.status(500).json({ message: 'could not update', error })
    }
  },

  async destroy(req, res) {
    try {
      await Task.findByIdAndDelete(req.params.id, {
        useFindAndModify: false
      })
  
      return res.status(200).json({ message: 'task is gone' })  
    } 
    catch (error) {
      return res.status(500).json({ message: 'could not delete a task', error })
    }
  }  
}