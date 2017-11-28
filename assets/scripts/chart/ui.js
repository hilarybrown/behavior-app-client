'use strict'

const showChartsTemplate = require('../templates/index-charts.handlebars')
const store = require('../store')
const handlebars = require('../handlebars.js')

const createChartSuccess = function (data) {
  store.daily_chart = data.daily_chart
  $('#new-chart-modal').modal('hide')
  $('#new-chart')[0].reset()
  $('#appMessage').show()
  $('#appMessage').text('Your new daily behavior chart has been created.')
}

const createChartRefreshSuccess = function (data) {
  const showChartsHtml = showChartsTemplate({ daily_charts: data.daily_charts })
  $('#authMessage').hide()
  $('#appMessage').show()
  $('#appMessage').text('Your new chart has been saved.')
  $('#showAllCharts').show()
  $('#showAllCharts').html('')
  $('#showAllCharts').html(showChartsHtml)
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

const showChartSuccess = function (response, status, xhr) {
  handlebars.showChartSmall(response.daily_chart)
  $('#chart-view-modal').modal('show')
}

const showChartFailure = function (response, status, xhr) {
  handlebars.chartFailure()
  $('#chart-view-modal').modal('show')
}

const removeChartSuccess = function (data) {
  $('#appMessage').show()
  $('#appMessage').text('Successful delete')
}

const removeChartRefreshSuccess = function (data) {
  const showChartsHtml = showChartsTemplate({ daily_charts: data.daily_charts })
  $('#authMessage').hide()
  // $('#appMessage').show()
  // $('#appMessage').text('Your chart has been deleted.')
  $('#showAllCharts').show()
  $('#showAllCharts').html('')
  $('#showAllCharts').html(showChartsHtml)
}

const removeChartFailure = function (data) {
  $('#appMessage').show()
  $('#appMessage').text('Error on delete. Please try again.')
}

const updateChartSuccess = function (data) {
  $('#editChartModal').modal('hide')
  $('#appMessage').show()
  $('#appMessage').text('Your chart has been updated.')
}

const updateChartFailure = function (data) {
  $('#appMessage').show()
  $('#appMessage').text('Error saving your update.')
}

module.exports = {
  getChartsSuccess,
  getChartsFailure,
  createChartSuccess,
  createChartFailure,
  showChartSuccess,
  showChartFailure,
  removeChartSuccess,
  removeChartFailure,
  createChartRefreshSuccess,
  removeChartRefreshSuccess,
  updateChartSuccess,
  updateChartFailure
}
