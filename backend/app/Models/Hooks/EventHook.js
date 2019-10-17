'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/JobSendMail')
const Event = use('App/Models/Event')
const User = use('App/Models/User')

const EventHook = exports = module.exports = {}

EventHook.sendMailSignUp = async taskInstance => {
  const event = await Event.findOrFail(taskInstance.id)
  const user = await User.findOrFail(taskInstance.user_id)

  const templateMail = 'emails.create_new_meetup'
  const subject = `O evento ${event.title} foi criado com sucesso`

  Kue.dispatch(Job.key, { user, event, subject, templateMail }, { attempts: 3 })
}
