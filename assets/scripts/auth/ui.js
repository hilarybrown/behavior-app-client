'use strict'

const store = require('../store')
const showChartsTemplate = require('../templates/index-charts.handlebars')

// store user's data upon successful sign up
const signUpSuccess = function (data) {
  store.user = data.user
  $('#signUpModal').modal('hide')
  // $('#signUpModal').hide()
  $('#sign-up')[0].reset()
  // $('#authMessage').show()
  // $('#authMessage').text('Congrats! You are now signed up. Please now SIGN IN with your new credentials to access your charts.')
  $('#alert-modal-content').addClass('alert-success')
  $('#alert-modal-content').html('<p>Congrats! You are now signed up. Please now SIGN IN with your new credentials to access your charts.</p>')
  $('#alertModal').modal('show')
}

const signUpFailure = function (data) {
  // $('#authMessage').text('Error on sign up')
  $('#alert-modal-content').addClass('alert-danger')
  $('#alert-modal-content').html('<p>Error on Sign Up</p>')
  $('#alertModal').modal('show')
}

// show success message
const signInSuccess = function (data) {
  $('#signInModal').modal('hide')
  $('#initial-heading').hide()
  $('#sign-in-container').hide()
  $('#pwUpdateContainer').show()
  $('#newChartContainer').show()
  $('#sign-out').show()
  $('#newMovieContainer').show()
  $('#sign-in')[0].reset()
  $('#alert-modal-content').addClass('alert-success')
  $('#alert-modal-content').html('<p>Welcome!</p>')
  $('#alertModal').modal('show')
  // $('#authMessage').show()
  // $('#authMessage').text('Welcome!')
  store.user = data.user
}

const signInIndexSuccess = function (data) {
  const showChartsHtml = showChartsTemplate({ daily_charts: data.daily_charts })
  // $('#authMessage').hide()
  $('#showAllCharts').show()
  $('#showAllCharts').html('')
  $('#showAllCharts').html(showChartsHtml)
}

const signInFailure = function (data) {
  $('#alert-modal-content').addClass('alert-danger')
  $('#alert-modal-content').html('<p>Error on Sign In</p>')
  $('#alertModal').modal('show')
}

const changePasswordSuccess = function (data) {
  $('#change-password')[0].reset()
  $('#passwordUpdateModal').modal('hide')
  $('#alert-modal-content').addClass('alert-success')
  $('#alert-modal-content').html('<p>Password Successfully Changed</p>')
  $('#alertModal').modal('show')
}

const changePasswordFailure = function (data) {
  $('#alert-modal-content').addClass('alert-danger')
  $('#alert-modal-content').html('<p>Error saving new password</p>')
  $('#alertModal').modal('show')
}

const signOutSuccess = function (data) {
  // $('#appMessage').hide()
  $('#showAllCharts').hide()
  $('#newChartContainer').hide()
  $('#sign-in-container').show()
  $('#pwUpdateContainer').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#change-password').show()
  // $('#authMessage').show()
  // $('#authMessage').text('Come back again soon!')
  $('#alert-modal-content').addClass('alert-success')
  $('#alert-modal-content').html('<p>Come back again soon!</p>')
  $('#alertModal').modal('show')
  store.user = null
}

const signOutFailure = function (data) {
  // $('#appMessage').hide()
  // $('#auth-message').text('Error on sign out')
  $('#alert-modal-content').addClass('alert-danger')
  $('#alert-modal-content').html('<p>Error on Sign Out</p>')
  $('#alertModal').modal('show')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  signInIndexSuccess
}
