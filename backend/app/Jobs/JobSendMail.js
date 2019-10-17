'use strict'
const Mail = use('Mail')
const { format, parseISO } = use('date-fns')

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
  async handle({ user, event, subject, templateMail }) {
    await Mail.send([templateMail], {
      user: user,
      event: event,
      datetimeFormatted: format(parseISO(event.datetime), 'dd/MM/yyyy H:mm')
    },
    message => {
      message
        .to(user.email)
        .from('contact@meetapp.com.br', 'MeetApp | Your Favorites Events')
        .subject(subject)
    })
  }
}

module.exports = JobSendMail
