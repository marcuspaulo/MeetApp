'use strict'
const Mail = use('Mail')

const EventHook = exports = module.exports = {}

EventHook.sendMailSignUp = async taskInstance => {
  if (!taskInstance.user_id) return

  // const { title } = await taskInstance.event().fetch()

  //const file = await taskInstance.banner.fetch()

  // const titlex = 'Parabéns pelo cadastro no MeetApp'
  // await Mail.send(['emails.sign_up_user'], { user: name },
  await Mail.send(['emails.sign_up_user'], { },
    message => {
      message
        .to('teste@tets.com')
        .from("contact@meetapp.com.br", "MeetApp | Your Favorites Events")
        .subject(`Olá , parabéns, você está confirmado para o evento.`)
        // ${user.name}
    })
}
