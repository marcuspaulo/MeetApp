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
      datetime: 'required'
    }
  }
}

module.exports = Event
