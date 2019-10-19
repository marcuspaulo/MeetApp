'use strict'
const { isBefore, isAfter } = use('date-fns')

const Subscription = use('App/Models/Subscription')
const Event = use('App/Models/Event')

const LIMIT_PER_PAGE = 10
class SubscriptionController {
  async index ({ request }) {
    const { page } = request.get()
    const subscribes = await Subscription.query().paginate(page, LIMIT_PER_PAGE)

    return subscribes
  }

  async store ({ params, request, response, auth }) {

    const eventId = params.eventId
    const userId = auth.user.id

    const event = await Event.query()
      .where('id', 1)
      .first()

    if (auth.user.id === event.user_id) {
      return response
        .status(500)
        .send({ error: { message: 'Ops! You cannot subscribe for your event.' } })
    }

    if (isAfter(new Date(event.datetime), new Date())) {
      return response
        .status(500)
        .send({ error: { message: 'Sorry! You cannot subscribe in a old event.' } })
    }

    const subscriptionExists = await Subscription.query()
      .where('event_id', eventId)
      .where('user_id', auth.user.id)
      .select('event_id')
      .select('user_id')
      .fetch()
     
    if (subscriptionExists.size()) {
      return response
        .status(500)
        .send({ error: { message: 'You are subscribe in this event' } })
    }

    //TODO Falta a implementação para verificar os eventos no mesmo horário

//     Subqueries
// const subquery = Database
//   .from('accounts')
//   .where('account_name', 'somename')
//   .select('account_name')

// const users = await Database
//   .from('users')
//   .whereIn('id', subquery)

    // if (isEventSameHour) {
    //   return response
    //     .status(500)
    //     .send({ error: { message: 'Ops! You cannot subscribe to event that are at the same hour.' } })
    // }

    const newSubscribe = await Subscription.create({ event_id: eventId, user_id: userId })

    return newSubscribe
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = SubscriptionController
