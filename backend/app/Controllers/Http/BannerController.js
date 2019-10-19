'use strict'

const Banner = use('App/Models/Banner')
const Helpers = use('Helpers')
class BannerController {
  async show ({ params, response }) {
    const image = await Banner.findOrFail(params.id)

    return response.download(Helpers.tmpPath(`uploads/${image.name}`))
  }

  async store ({ request, response }) {
    try {
      if (!request.file('file')) return

      const upload = request.file('file', { size: '2mb' })

      const fileName = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads'), {
        name: fileName
      })

      if (!upload.moved()) {
        throw upload.error()
      }

      const file = await Banner.create({
        name: upload.fileName,
        type: upload.type,
        subtype: upload.subtype,
        path: Helpers.tmpPath('uploads')

      })

      return file
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Error: failed to upload banner' } })
    }
  }
}

module.exports = BannerController
