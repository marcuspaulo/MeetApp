"use strict";

const User = use('App/Models/User')
class SessionController {
  async store({ request, response, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    const saveUser = await User.findByOrFail('email', email)
    const user = {
      id: saveUser.id,
      name: saveUser.name,
      email: saveUser.email
    }

    return { token, user }
  }
}

module.exports = SessionController
