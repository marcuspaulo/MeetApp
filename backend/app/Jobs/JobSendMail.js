'use strict'
const Mail = use('Mail')

class JobSendMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'JobSendMail-job'
  }

  // This is where the work is done.
  async handle({ email, user, title, image }) {
    await Mail.send(['emails.sign_up_user'], { user: user.name },
      message => {
        message
          .to(email)
          .from('contact@meetapp.com.br', 'MeetApp | Your Favorites Events')
          .subject(`Olá ${user.name}, parabéns, você está confirmado para o evento.`)
      })
  }
}

module.exports = JobSendMail

