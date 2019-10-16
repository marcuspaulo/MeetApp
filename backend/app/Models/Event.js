'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
  static boot () {
    super.boot()

    this.addHook('afterSave', 'EventHook.sendMailSignUp')
  }

  users () {
    return this.belongsToMany('App/Models/User').pivotModel('App/Models/UserEvent')
  }

  subscriptions () {
    return this.hasMany('App/Models/Subscription')
  }

  getBannerUrl ({ banner_id }) {
    return banner_id ? `${Env.get('APP_URL')}/file/${banner_id}` : null
  }
}

module.exports = Event
