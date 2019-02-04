'use strict'

module.exports = checkUsersValid

function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(u) {
      return goodUsers.some(function(gu) {
        return gu.id === u.id
      })
    })
  }
}
