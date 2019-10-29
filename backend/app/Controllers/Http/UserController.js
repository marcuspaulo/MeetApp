'use strict'

const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    const data = request.only(['name', 'email', 'password'])
    const user = await User.create(data)

    return user
  }

  async update({ request, response }) {
    console.log(request.all())

    const { email, oldPassword } = request.all()

    const user = await User.findByOrFail('email', email)

    if (email !== user.email) {
      const userExist = await User.findOne({
        where: { email }
      })
      if (userExist) {
        return response.status(422).json({ error: 'User already exist!' })
      }
    }

    // if (oldPassword && !(await user.checkPassword(oldPassword))) {
    //   return response.status(401).json({ error: 'Password does not match' })
    // }

    user.merge(response.body)
    await user.save()

    // return user

    return response.json({
      id: user.id,
      name: user.name,
      email: user.email
    })
    // const { id, name } = await User.findByPk(response.userId)

    // return response.json({
    //   id,
    //   name,
    //   email
    // })
  }
}

module.exports = UserController
