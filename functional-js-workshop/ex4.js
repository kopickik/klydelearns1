'use strict'

module.exports = getShortMessages

function getShortMessages(messages) {
  return messages.map(msg => msg.message).filter(msg => msg.length < 50)
}
