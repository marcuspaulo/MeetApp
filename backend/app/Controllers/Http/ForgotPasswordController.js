'use strict'

const Mail = use('Mail')
const User = use('App/Models/User')
const moment = require('moment')
const crypto = require('crypto')

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'E-mail no found.' } })
    }
  }

  async update({ request, response }) {
    try {
      const { token, password } = request.all()
      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'Token expired.' } })
      }

      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (e) {
      return response
        .status(e.status)
        .send({ error: { message: 'Reset password not forbidden.' } })
    }
  }
}

module.exports = ForgotPasswordController
