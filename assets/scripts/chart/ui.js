'use strict'

const showChartsTemplate = require('../templates/index-charts.handlebars')
// const showChartTemplate = require('../templates/show-chart.handlebars')
const store = require('../store')
const handlebars = require('../handlebars.js')

const createChartSuccess = function (data) {
  store.daily_chart = data.daily_chart
  $('#new-chart-modal').modal('hide')
  $('#new-chart')[0].reset()
  // $('#appMessage').show()
  // $('#appMessage').text('Your new daily behavior chart has been created.')
}

const createChartRefreshSuccess = function (data) {
  const showChartsHtml = showChartsTemplate({ daily_charts: data.daily_charts })
  // $('#authMessage').hide()
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
  // $('#authMessage').hide()
  // $('#appMessage').show()
  // $('#appMessage').text('Here are all of your behavior charts')
  $('#showAllCharts').show()
  $('#showAllCharts').html('')
  $('#showAllCharts').html(showChartsHtml)
}

const getChartsFailure = function (data) {
  // $('#appMessage').show()
  // $('#appMessage').text('Error bringing back your behavior charts.')
  $('#alert-modal-content').addClass('alert-danger')
  $('#alert-modal-content').html("<h3>You don't have any charts yet. Click the button to Create Today's Daily Chart!</h3>")
  $('#alertModal').modal('show')
}

// const showChartView = function (data) {
//   $('#chart-view').empty()
//   $('#chart-view').append(data)
// }

const showChartSuccess = function (response, status, xhr) {
  handlebars.showChartSmall(response.daily_chart)
  $('#chart-view').empty()
  $('#chart-view').append(handlebars.showChartSmall(response.daily_chart))
  // $('#teeth_am').val(response.daily_chart.teeth_am)
  // $('#bfast_dishes').val(response.daily_chart.bfast_dishes)
  // $('#made_bed').val(response.daily_chart.made_bed)
  // $('#dressed').val(response.daily_chart.dressed)
  // $('#drop_off').val(response.daily_chart.drop_off)
  // $('#no_fighting').val(response.daily_chart.no_fighting)
  // $('#ate_dinner').val(response.daily_chart.ate_dinner)
  $('#chart-view-modal').modal('show')
}

const showChartFailure = function (response, status, xhr) {
  handlebars.chartFailure()
  $('#chart-view-modal').modal('show')
}

const removeChartSuccess = function (data) {
  // $('#appMessage').hide()
  // $('#appMessage').show()
  // $('#appMessage').text('Successful delete')
}

const removeChartRefreshSuccess = function (data) {
  const showChartsHtml = showChartsTemplate({ daily_charts: data.daily_charts })
  // $('#authMessage').hide()
  // $('#appMessage').show()
  // $('#appMessage').text('Successful delete')
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

const updateChartSuccess = function (data) {
  // $('#chart-view-modal').modal('hide')
  // $('#appMessage').show()
  // $('#appMessage').text('Your chart has been updated.')
}

const updateChartRefreshSuccess = function (data) {
  const showChartsHtml = showChartsTemplate({ daily_charts: data.daily_charts })
  // $('#authMessage').hide()
  $('#chart-view-modal').modal('hide')
  $('#alert-modal-content').addClass('alert-success')
  $('#alert-modal-content').html('<p>Update Saved</p>')
  $('#alertModal').modal('show')
  // $('#appMessage').show()
  // $('#appMessage').text('Your chart has been updated.')
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
  removeChartSuccess,
  removeChartFailure,
  createChartRefreshSuccess,
  removeChartRefreshSuccess,
  updateChartSuccess,
  updateChartFailure,
  updateChartRefreshSuccess
  // showChartView
}
