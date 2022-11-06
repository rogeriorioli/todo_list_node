const express = require('express');
const TaskController = require('../controllers/TaskController')
const UserController = require('../controllers/UserController')
const taskController = new TaskController()
const userController = new UserController()
const route = express.Router()

route.get('/user/tasks', taskController.getAllUserTasks)

route.post('/user/task/create', taskController.createUserTask)
 route.put('/user/task/:id', taskController.updateTask)

route.delete('/user/task/:id', taskController.deleteTask)


route.post('/user/create', userController.createUser)

module.exports = route