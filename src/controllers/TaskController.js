
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class TaskController {

  async getAllUserTasks(req, res) {
      const {userid} = req.headers
      const tasks = await prisma.user.findFirst({
        where : {
          id : userid
        },
        include : {
          tasks : true
        }
      })
      .then(success => res.status(200).json(success))
      .catch(err => res.status(400).json(err))
  }

  //A fairy dies every time a todo list is made.
  async createUserTask(req, res) {
      const  userid = req.headers
      const {title,  description } = req.body
      const task = await prisma.task.create({
        data : {
          title : title,
          description : description,
          userId : userid.userid
        }
      
      }).then(success => res.status(200).json(success))
      .catch(err =>  res.status(400).json(err))
      console.log('aqui,' , userid.userid)
  }

  async updateTask(req, res) {
    const { id } = req.params
    const {title, description, status } = req.body 
    const task = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        title : title,
        description : description,
        status : status
      },
    }).then(success => res.status(200).json(success))
    .catch(err => res.status(400).json(err))
  }
  async deleteTask(req, res) {
    const { id } = req.params
    const task = await prisma.task.delete({
      where: {
        id: id,
      }
    }).then(success => res.status(200).json(success))
    .catch(err => res.status(400).json(err))
  }  
}

module.exports = TaskController