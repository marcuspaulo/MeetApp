'use strict'

const Subscription = use('App/Models/Subscription')
const LIMIT_PER_PAGE = 10
class SubscriptionController {
  async index ({ request }) {
    const { page } = request.get()
    const subscribes = await Subscription.query().paginate(page, LIMIT_PER_PAGE)

    return subscribes
  }

  async store ({ request, response, auth }) {
    const { eventId } = request.only(['eventId'])
    const userId = auth.user.id

    const newSubscribe = await Subscription.create({ event_id: eventId, user_id: userId })

    return newSubscribe
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = SubscriptionController
