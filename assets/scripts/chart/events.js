'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require(`../../../lib/get-form-fields`)

const onCreateChart = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createChart(data)
    .then(ui.createChartSuccess)
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

const addHandlers = () => {
  $('#getChartsButton').on('submit', onGetCharts)
  $('#new-chart').on('submit', onCreateChart)
  // $('#showAllCharts').on('click', '.remove', onRemoveChart)
}

module.exports = {
  addHandlers,
  onGetCharts,
  onCreateChart
  // onRemoveChart,
  // onUpdateChart
}
