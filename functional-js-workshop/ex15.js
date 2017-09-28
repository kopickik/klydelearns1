'use strict'

function loadUsers(userIds, load, done) {
  var users = []
  var completed = 0
  userIds.forEach(function(id, i) {
    load(id, function(user) {
      users[i] = user
      if (++completed === userIds.length) {
        return done(users);
      }
    })
  });
}

module.exports = loadUsers