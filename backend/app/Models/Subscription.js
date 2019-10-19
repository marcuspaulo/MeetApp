'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Subscription extends Model {

  static boot () {
    super.boot()

    this.addHook('afterSave', 'SubscriptionHook.sendMailSubscribeToOwner')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

  event () {
    return this.belongsTo('App/Models/Event')
  }
}

module.exports = Subscription
