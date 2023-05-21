const fs = require('fs')
const multiparty = require('multiparty')
const AWS = require('aws-sdk')

const context = require('../context')

// create S3 instance
const s3 = new AWS.S3({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  })

const uploadLandingImages = (request, response) => {
  const form = new multiparty.Form()
  const landingId = request.query.landingId
  const imageType = request.query.imageType
  const prisma = context().prisma

  if (imageType != 'logo' && imageType != 'landing') {
    response.send(400)
    return
  }

  form.parse(request, async (error, fields, files) => {
    if (error) {
      return response.status(500).send(error)
    }
    try {
      const path = files.image[0].path
      const buffer = fs.readFileSync(path)
      const fileName = `${Date.now().toString()}`
      const data = await uploadFile(buffer, fileName, {
        mime: 'mime',
        ext: 'jpg',
      })

      if (imageType == 'landing') {
        console.log
        await prisma.landingInfo.update({
          where: { id: landingId },
          data: {
            images: {
              set: [],
            },
          },
        })
        await prisma.businessImage.create({
          data: {
            url: data.Location,
            landingInfo: { connect: { id: landingId } },
          },
        })
      } else {
        await prisma.landingInfo.update({
          where: { id: landingId },
          data: {
            logoUrl: data.Location,
          },
        })
      }

      return response.status(200).send({ url: data.Location })
    } catch (err) {
      console.log('err', err)
      return response.status(500).send(err)
    }
  })
}

const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: process.env.S3_BUCKET,
    ContentType: type.mime,
    Key: `${name}.${type.ext}`,
  }
  return s3.upload(params).promise()
}

module.exports = { uploadLandingImages }
