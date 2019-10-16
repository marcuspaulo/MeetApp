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
      date: 'required',
      time: 'required'
    }
  }
}

module.exports = Event
