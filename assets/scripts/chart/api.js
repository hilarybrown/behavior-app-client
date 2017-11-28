'use strict'

const config = require('../config')
const store = require('../store')

const createChart = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/daily_charts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getCharts = function () {
  return $.ajax({
    url: config.apiOrigin + '/daily_charts',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getCharts,
  // showChart,
  createChart
  // removeChart,
  // updateChart
}
