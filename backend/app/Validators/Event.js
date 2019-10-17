'use strict'

class Event {
  get validateAll() {
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required',
      location: 'required',
      datetime: 'required',
      user_id: 'required',
      banner_id: 'required'
    }
  }
}

module.exports = Event
