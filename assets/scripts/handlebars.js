'use strict'
// const store = require('./store')

const showChartTemplate = require('./templates/show-chart.handlebars')
const chartFailureTemplate = require('./templates/chart_failure.handlebars')

const showChartSmall = function (data) {
  const showChartSmallHtml = showChartTemplate({daily_chart: data})
  showChartView(showChartSmallHtml)
}

const chartFailure = function () {
  showChartView(chartFailureTemplate())
}

const showChartView = function (data) {
  $('#chartview').empty()
  $('#chart-view').append(data)
}

module.exports = {
  showChartSmall,
  chartFailure
}
