const { verify } = require('jsonwebtoken')

const APP_SECRET = 'appsecret321'

function getUserId(context) {
  const Authorization = context.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET)
    return verifiedToken && verifiedToken.userId
  }
}

const createConnectObject = (ids) => {
  return (connectObjects =
    ids &&
    ids.length &&
    ids.map((id) => {
      return {
        id,
      }
    }))
}

module.exports = {
  getUserId,
  APP_SECRET,
  createConnectObject,
}
