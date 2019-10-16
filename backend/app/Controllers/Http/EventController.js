'use strict'

const Event = use('App/Models/Event')
const LIMIT_PER_PAGE = 10

class EventController {
  async index ({ request }) {
    const { page } = request.get()
    const events = await Event.query().paginate(page, LIMIT_PER_PAGE)

    return events
  }

  async store ({ request, response, auth }) {
    const { title, description, location, datetime, banner } = request.all()
    //const userId = auth.user.id
    const userId = 1

    const newEvent = await Event.create({ title, description, location, datetime, user_id: userId, banner_id: banner })

    return newEvent
  }

  async show ({ params, request, response, view }) {
    const event = await Event.findOrFail(params.id)

    return event
  }

  async update ({ params, request, response }) {
    const event = await Event.findOrFail(params.id)
    const eventUpdate = request.only(['title', 'description', 'location'])

    event.merge(eventUpdate)
    await event.save()

    return event
  }

  async destroy ({ params, request, response }) {
    const event = await Event.findOrFail(params.id)

    await event.delete()
  }
}

module.exports = EventController
