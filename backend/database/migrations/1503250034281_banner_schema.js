'use strict'

const Schema = use('Schema')

class BannerSchema extends Schema {
  up () {
    this.create('banners', (table) => {
      table.increments()
      table.string('type').notNullable()
      table.string('name').notNullable()
      table.string('path')
      table.timestamps()
    })
  }

  down () {
    this.drop('banners')
  }
}

module.exports = BannerSchema
