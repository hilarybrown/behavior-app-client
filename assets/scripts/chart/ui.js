'use strict'

const showChartsTemplate = require('../templates/index-charts.handlebars')
const store = require('../store')
const handlebars = require('../handlebars.js')

const createChartSuccess = function (data) {
  store.daily_chart = data.daily_chart
  $('#new-chart-modal').modal('hide')
  $('#new-chart')[0].reset()
}

const createChartRefreshSuccess = function (data) {
  const showChartsHtml = showChartsTemplate({ daily_charts: data.daily_charts })
  $('#alert-modal-content').addClass('alert-success')
  $('#alert-modal-content').html('<p>New Chart Saved</p>')
  $('#alertModal').modal('show')
  $('#showAllCharts').show()
  $('#showAllCharts').html('')
  $('#showAllCharts').html(showChartsHtml)
}

const createChartFailure = function (data) {
  $('#alert-modal-content').addClass('alert-danger')
  $('#alert-modal-content').html('<p>Error saving your chart. Please try again.</p>')
  $('#alertModal').modal('show')
}

const getChartsSuccess = function (data) {
  const showChartsHtml = showChartsTemplate({ daily_charts: data.daily_charts })
  $('#showAllCharts').show()
  $('#showAllCharts').html('')
  $('#showAllCharts').html(showChartsHtml)
}

const getChartsFailure = function (data) {
  $('#alert-modal-content').addClass('alert-danger')
  $('#alert-modal-content').html("<h3>You don't have any charts yet. Click the button to Create Today's Daily Chart!</h3>")
  $('#alertModal').modal('show')
}

const showChartSuccess = function (response, status, xhr) {
  handlebars.showChartSmall(response.daily_chart)
  $('#chart-view').empty()
  $('#chart-view').append(handlebars.showChartSmall(response.daily_chart))
  $('#chart-view-modal').modal('show')
}

const showChartFailure = function (response, status, xhr) {
  handlebars.chartFailure()
  $('#chart-view-modal').modal('show')
}

const removeChartRefreshSuccess = function (data) {
  const showChartsHtml = showChartsTemplate({ daily_charts: data.daily_charts })
  $('#alert-modal-content').addClass('alert-success')
  $('#alert-modal-content').html('<p>Successful Delete</p>')
  $('#alertModal').modal('show')
  $('#showAllCharts').show()
  $('#showAllCharts').html('')
  $('#showAllCharts').html(showChartsHtml)
}

const removeChartFailure = function (data) {
  $('#alert-modal-content').addClass('alert-danger')
  $('#alert-modal-content').html('<p>Error on delete. Please try again.</p>')
  $('#alertModal').modal('show')
}

const updateChartRefreshSuccess = function (data) {
  const showChartsHtml = showChartsTemplate({ daily_charts: data.daily_charts })
  $('#chart-view-modal').modal('hide')
  $('#alert-modal-content').addClass('alert-success')
  $('#alert-modal-content').html('<p>Update Saved</p>')
  $('#alertModal').modal('show')
  $('#showAllCharts').show()
  $('#showAllCharts').html('')
  $('#showAllCharts').html(showChartsHtml)
}

const updateChartFailure = function (data) {
  $('#alert-modal-content').addClass('alert-danger')
  $('#alert-modal-content').html('<p>Error saving your update. Please try again.</p>')
  $('#alertModal').modal('show')
}

module.exports = {
  getChartsSuccess,
  getChartsFailure,
  createChartSuccess,
  createChartFailure,
  showChartSuccess,
  showChartFailure,
  removeChartFailure,
  createChartRefreshSuccess,
  removeChartRefreshSuccess,
  updateChartFailure,
  updateChartRefreshSuccess
}
