const request = require('request-promise')
const _ = require('lodash')

const github = {
  token: null,

  getUser: () => request({
    method: 'GET',
    uri: 'https://api.github.com/user',
    json: true,
    headers: {
      'Authorization': 'token ' + github.token,
      'User-Agent': 'kopickik'
    }
  }),

  getUserReposUrl: (user) => user.repos_url,

  getUserRepos: (uri, repos) => {
    return request({
      method: 'GET',
      uri: uri,
      json: true,
      resolveWithFullResponse: true,
      headers: {
        'Authorization': 'token ' + github.token,
        'User-Agent': 'kopickik'
      }
    }).then((res) => {
      if (!repos) {
        repos = []
      }
      repos = repos.concat(res.body)

      let licenses = _.compact(_.map(repos, (repo) => repo.license))
      return licenses.length + '/' + _.map(repos, repo => repo.license).length
    })
  },

  isPublic : (repo) => !repo.private,

  isOriginal : (repo) => !repo.fork,

  licenseUrl : (repo) => repo.contents_url.replace(/\{\+path\}/,'LICENSE'),

  isMissing : license => license,

  createLicenseLink : license => license.replace(/https:\/\/api.github.com\/repos\/(.*)\/(.*)\/contents\/LICENSE/, 'https://github.com/$1/$2/new/master?filename=LICENSE')

}

const main = (params) => {
  github.token = params.token
  return github.getUser()
    .then(github.getUserReposUrl)
    .then(github.getUserRepos)
}

main({'token': 'b2bb11ae90a35ac3ec7286d01e0e9e86d4feaab1'}).then(result => console.log(result))
