'use strict'

const Event = use('App/Models/Event')

class EventController {
  async index ({ request, response, view }) {
    const events = await Event.query().fetch()

    return events
  }

  async store ({ request, response, auth }) {
    const { title, description, location, date, time } = request.all()
    //const userId = auth.user.id
    const userId = 1

    const newEvent = await Event.create({ title, description, location, date, time, user_id: userId })

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
