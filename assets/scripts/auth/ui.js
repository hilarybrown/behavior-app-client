'use strict'

const store = require('../store')

// store user's data upon successful sign up
const signUpSuccess = function (data) {
  store.user = data.user
  $('#signUpModal').modal('hide')
  $('#signUpModal').hide()
  $('#sign-up')[0].reset()
  $('#authMessage').show()
  $('#authMessage').text('Congrats! You are now signed up. Please now SIGN IN with your new credentials to access your movies.')
}

const signUpFailure = function (data) {
  $('#authMessage').text('Error on sign up')
}

// show success message
const signInSuccess = function (data) {
  $('#getMoviesButton').show()
  $('#signInModal').modal('hide')
  $('#sign-in-container').hide()
  $('#pwUpdateContainer').show()
  $('#sign-out').show()
  $('#newMovieContainer').show()
  $('#sign-in')[0].reset()
  $('#authMessage').show()
  $('#authMessage').text('Welcome!')
  store.user = data.user
}

const signInFailure = function (data) {
  $('#authMessage').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  $('#change-password')[0].reset()
  $('#passwordUpdateModal').modal('hide')
  $('#authMessage').text('Password successfully changed')
}

const changePasswordFailure = function (data) {
  $('#authMessage').text('Error on password change')
}

const signOutSuccess = function (data) {
  $('#appMessage').hide()
  $('#sign-in-container').show()
  $('#getMoviesButton').hide()
  $('#showAllMovies').hide()
  $('#pwUpdateContainer').hide()
  $('#sign-out').hide()
  $('#sign-in').show()
  $('#change-password').show()
  $('#newMovieContainer').hide()
  $('#authMessage').show()
  $('#authMessage').text('Come back again soon!')
  store.user = null
}

const signOutFailure = function (data) {
  $('#appMessage').hide()
  $('#auth-message').text('Error on sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
