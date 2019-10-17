'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/JobSendUserMail')
const User = use('App/Models/User')

const UserHook = exports = module.exports = {}

UserHook.forgotPassword = async taskInstance => {
  let templateMail = ''
  let subject = ''
  let user = {}

  if (taskInstance.token) {
    user = await User.find(taskInstance.id)
    templateMail = 'emails.forgot_password'
    subject = `Recuperação de senha solicitada do usuário: ${user.email}`
  } else {
    user = { name: taskInstance.name, email: taskInstance.email }
    templateMail = 'emails.sign_up_user'
    subject = `Olá ${taskInstance.name} seu usuário foi criado com sucesso!`
  }

  Kue.dispatch(Job.key, { user, subject, templateMail }, { attempts: 3 })
}
