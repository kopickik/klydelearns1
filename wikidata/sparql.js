const fetch = require('isomorphic-fetch')
const endpointUrl = 'https://query.wikidata.org/sparql'
const sparqlQuery = `SELECT ?Ho_Chi_Minh ?Ho_Chi_MinhLabel WHERE {
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
  ?Ho_Chi_Minh wdt:P138 wd:Q36014.
}
LIMIT 100`
const fullUrl = endpointUrl + '?query=' + encodeURIComponent(sparqlQuery)
const headers = {
  Accept: 'application/sparql-results+json',
}

fetch(fullUrl, {
    headers
  })
  .then(body => body.json())
  .then(json => {
    const {
      head: {
        vars
      },
      results
    } = json
    for (const result of results.bindings) {
      for (const variable of vars) {
        console.log('%s: %o', variable, result[variable])
      }
      console.log('---')
    }
  })
