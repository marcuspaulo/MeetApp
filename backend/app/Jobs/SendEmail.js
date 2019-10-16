'use strict'

const Mail = use('Mail')

class SendEmail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'SendEmail-job'
  }

  async handle({ user, team, email }) {
    await Mail.send(['emails.invitation'], { user: user.name }, message => {
      message
        .to(email)
        .from("contact@meetapp.com.br", "MeetApp | Your Favorites Events")
        .subject(`Olá ${user.name}, parabéns, você está confirmado para o evento.`)
    });
  }
}

module.exports = SendEmail
