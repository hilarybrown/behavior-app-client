'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onCreateChart = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createChart(data)
    .then(ui.createChartSuccess)
    .then(onCreateChartRefresh)
    .catch(ui.createChartFailure)
}

const onCreateChartRefresh = function (event) {
  api.getCharts()
    .then(ui.createChartRefreshSuccess)
    .catch(ui.createChartFailure)
}

const onGetCharts = function (event) {
  event.preventDefault()
  api.getCharts()
    // .then((charts) => {
    //   $(document).on('submit', '#edit-chart', onUpdateChart)
    //   return charts
    // })
    .then(ui.getChartsSuccess)
    .catch(ui.getChartsFailure)
}

const onShowChart = function (event) {
  event.preventDefault()
  console.log('event.target is', event.target)
  // const chartId = event.target.attributes['data-id'].value
  const chartId = $(event.target).attr('data-id')
  // const chartId = $(event.target).parent().attributes['data-id'].value
  console.log('chartId is', chartId)
  api.showChart(chartId)
    .then(ui.showChartSuccess)
    .catch(ui.showChartFailure)
}

const onRemoveChart = function (event) {
  event.preventDefault()
  // const data = $(event.target).parent().attr('data-id')
  const data = $(event.target).attr('data-id')
  api.removeChart(data)
    // .then(ui.removeChartSuccess)
    .then(onRemoveChartRefresh)
    .catch(ui.removeChartFailure)
}

const onRemoveChartRefresh = function (event) {
  api.getCharts()
    .then(ui.removeChartRefreshSuccess)
    .catch(ui.removeChartFailure)
}

const addHandlers = () => {
  $('#getChartsButton').on('submit', onGetCharts)
  $('#new-chart').on('submit', onCreateChart)
  $('#showAllCharts').on('click', '.show-chart', onShowChart)
  $('#showAllCharts').on('click', '.remove', onRemoveChart)
}

module.exports = {
  addHandlers,
  onGetCharts,
  onCreateChart,
  onRemoveChart
  // onUpdateChart
}