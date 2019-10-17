'use strict'
const { isBefore } = use('date-fns')

const Event = use('App/Models/Event')
const LIMIT_PER_PAGE = 10

class EventController {
  async index ({ request }) {
    const { page } = request.get()
    const events = await Event.query().paginate(page, LIMIT_PER_PAGE)

    return events
  }

  async listMyOwnEvents ({ request, auth }) {
    const { page } = request.get()
    const userId = auth.user.id

    const events = await Event.query().where('user_id', userId).paginate(page, LIMIT_PER_PAGE)

    return events
  }

  async store ({ request, response, auth }) {
    const { title, description, location, datetime, bannerId } = request.all()

    if (isBefore(new Date(datetime), new Date())) {
      return response
        .status(500)
        .send({ error: { message: 'Event data must be after current date' } })
    }

    const userId = auth.user.id

    const newEvent = await Event.create({ title, description, location, datetime, user_id: userId, banner_id: bannerId })

    return newEvent
  }

  async show ({ params, request, response, view }) {
    const event = await Event.findOrFail(params.id)

    return event
  }

  async update ({ params, request, response, auth }) {
    const event = await Event.findOrFail(params.id)

    if (auth.user.id !== event.user_id) {
      return response
        .status(500)
        .send({ error: { message: 'Ops! You do not have permission to change the event.' } })
    }

    const eventUpdate = request.only(['title', 'description', 'location'])

    if (isBefore(new Date(event.datetime), new Date())) {
      return response
        .status(500)
        .send({ error: { message: 'Ops! Old events cannot be changed' } })
    }

    event.merge(eventUpdate)
    await event.save()

    return event
  }

  async destroy ({ params, response, auth }) {
    const event = await Event.findOrFail(params.id)

    if (auth.user.id !== event.user_id) {
      return response
        .status(500)
        .send({ error: { message: 'Ops! You do not have permission to change the event.' } })
    }

    if (isBefore(new Date(event.datetime), new Date())) {
      return response
        .status(500)
        .send({ error: { message: 'Ops! Old events cannot be changed' } })
    }

    await event.delete()
  }
}

module.exports = EventController
