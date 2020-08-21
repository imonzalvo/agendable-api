const { verify } = require('jsonwebtoken')
const moment = require('moment')

const APP_SECRET = 'appsecret321'

function getUserId(context) {
  console.log('context', context.req.headers)
  const Authorization = context.req.headers.authorization
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

const getDatesRange = (from, to) => {
  let currentDate = moment(from)
  const lastDay = moment(to)
  let res = []
  while (currentDate.isBefore(lastDay) || currentDate.isSame(lastDay, 'day')) {
    const rawDate = currentDate.format('YYYY-MM-DD')
    res.push(rawDate)
    currentDate = currentDate.add(1, 'days')
  }
  return res
}

const generateQueryObjectFromDateRange = (range) => {
  return range.map((day) => {
    return {
      start: {
        startsWith: day,
      },
    }
  })
}

const getDateFromMomentDate = (date) => {
  return date.split('T')[0] //2020-01-25
}

module.exports = {
  getUserId,
  APP_SECRET,
  createConnectObject,
  getDatesRange,
  generateQueryObjectFromDateRange,
  getDateFromMomentDate,
}
