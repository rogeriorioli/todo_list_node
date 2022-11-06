const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

class UserController {
  async createUser(req, res) {
      const {name , email} = req.body
      const user = await prisma.user.create({
        data : {
          name : name,
          email : email
        }
      }).then(success => res.status(200).json(success))
      .catch(err => res.status(400).json(err))

  }
}

module.exports = UserController