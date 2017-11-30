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
    //   $(document).on('submit', '#update-chart', onUpdateChart)
    //   return charts
    // })
    .then(ui.getChartsSuccess)
    .catch(ui.getChartsFailure)
}

const onShowChart = function (event) {
  event.preventDefault()
  // const chartId = $(event.target).attr('data-id')
  const chartId = event.target.dataset.id
  // const chartId = $(event.target).parent().attributes['data-id'].value
  api.showChart(chartId)
    // .then((charts) => {
    //   $(document).on('submit', '#update-chart', onUpdateChart)
    //   return charts
    // })
    // .then(ui.showChartView)
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

const onUpdateChart = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log('data.daily_chart is', data.daily_chart)
  const chartId = $('#update-chart').attr('data-id')
  api.updateChart(chartId, data)
    .then(onUpdateChartRefresh)
    .catch(ui.updateChartFailure)
}

const onUpdateChartRefresh = function (event) {
  api.getCharts()
    .then(ui.updateChartRefreshSuccess)
    .catch(ui.updateChartFailure)
}

const fadeModal = function () {
  setTimeout(() => {
    $('#alertModal').modal('hide')
  }, 1000)
}

const addHandlers = () => {
  // $('#getChartsButton').on('submit', onGetCharts)
  $('#new-chart').on('submit', onCreateChart)
  $('#showAllCharts').on('click', '.show-chart', onShowChart)
  $('#showAllCharts').on('click', '.remove', onRemoveChart)
  $(document).on('submit', '#update-chart', onUpdateChart)
  $('#update-chart').on('submit', '.update-button', onUpdateChart)
  $('#alertModal').on('shown.bs.modal', fadeModal)
}

module.exports = {
  addHandlers,
  onGetCharts,
  onCreateChart,
  onRemoveChart,
  onUpdateChart
}
