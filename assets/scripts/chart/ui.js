'use strict'

const showChartsTemplate = require('../templates/index-charts.handlebars')
const store = require('../store')

const createChartSuccess = function (data) {
  store.daily_chart = data.daily_chart
  $('#new-chart-modal').modal('hide')
  $('#new-chart')[0].reset()
  $('#appMessage').show()
  $('#appMessage').text('Your new daily behavior chart has been created.')
}

const createChartFailure = function (data) {
  $('#userMessage').text('Error creating your new behavior chart. Please try again.')
}

const getChartsSuccess = function (data) {
  const showChartsHtml = showChartsTemplate({ daily_charts: data.daily_charts })
  $('#authMessage').hide()
  $('#appMessage').show()
  $('#appMessage').text('Here are all of your behavior charts')
  $('#showAllCharts').show()
  $('#showAllCharts').html('')
  $('#showAllCharts').html(showChartsHtml)
}

const getChartsFailure = function (data) {
  $('#appMessage').show()
  $('#appMessage').text('Error bringing back your behavior charts.')
}

module.exports = {
  getChartsSuccess,
  getChartsFailure,
  createChartSuccess,
  createChartFailure
  // removeChartSuccess,
  // removeChartFailure,
  // updateChartSuccess,
  // updateChartFailure
}
