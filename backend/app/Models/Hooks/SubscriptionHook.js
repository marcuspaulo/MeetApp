'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/JobSendMail')
const Event = use('App/Models/Event')
const User = use('App/Models/User')

const SubscriptionHook = exports = module.exports = {}

SubscriptionHook.sendMailSubscribeToOwner = async taskInstance => {

  const event = await Event.query()
    .where('id', taskInstance.event_id)
    .first()

  const owner = await User.query()
    .where('id', event.user_id)
    .first()

  const user = await User.findOrFail(taskInstance.user_id)

  const templateMail = 'emails.new_subscribe'
  const subject = `Você tem mais um inscrito no evento ${event.title}.`

  Kue.dispatch(Job.key, { email: owner.email, user, event, subject, templateMail }, { attempts: 3 })
}