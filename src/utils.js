const { verify } = require('jsonwebtoken')
const moment = require('moment')

const APP_SECRET = 'appsecret321'

function getUserId(req) {
  const authHeader = req.headers
  console.log("req", authHeader)

  const Authorization = req.headers.authorization;
  console.log("req", Authorization)
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET)
  console.log("req", Authorization, verifiedToken)

    return verifiedToken && verifiedToken.userId
  } else {
    throw new Error(`User not authenticated`)
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

async function asyncForEach(array, callback) {
  if(array) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array)
    }
  }
}

const disconnectObject = (oldRelations, newRelations) => {
  const removedRelations = oldRelations.filter((rel) => {
    const isRemoved = !newRelations.includes(rel)
    return isRemoved
  })
  return removedRelations.map((rel) => ({ id: rel }))
}

module.exports = {
  getUserId,
  APP_SECRET,
  createConnectObject,
  getDatesRange,
  generateQueryObjectFromDateRange,
  getDateFromMomentDate,
  asyncForEach,
  disconnectObject,
}
