'use strict'
const Mail = use('Mail')

class JobSendUserMail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'JobSendUserMail-job'
  }

   // This is where the work is done.
   async handle({ user, subject, templateMail }) {
     try {
      await Mail.send([templateMail], {
        user: user,
      },
      message => {
        message
          .to(user.email)
          .from('contact@meetapp.com.br', 'MeetApp | Your Favorites Events')
          .subject(subject)
      })
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = JobSendUserMail

