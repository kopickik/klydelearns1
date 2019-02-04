const fetch = require('node-fetch')
const fs = require('fs')

async function logFetch(url) {
  try {
    const response = await fetch(url)
    fs.writeFileSync('site.html', await response.text())
  } catch (err) {
    console.log('fetch failed', err)
  }
}

module.exports = logFetch
