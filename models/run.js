import request from 'superagent'
import Promise from 'promise'

function getTimestamp () {
  return new Promise(function (resolve, reject) {
    request.get('./v1/timestamp').end(function (err, res) {
      if (err) reject(err)
      else resolve(res.text)
    })
  })
}

function postRunDetails (runDetails) {
  request
    .post('./v1/runs')
    .send(runDetails)
    .end()
}

function getRankings () {
  return new Promise(function (resolve, reject) {
    request
      .get('./v1/leaderboard')
      .end(function (err, res) {
        if (err) reject(err)
        else resolve(res.body)
      })
  })
}

module.exports = {
  getTimestamp: getTimestamp,
  postRunDetails: postRunDetails,
  getRankings: getRankings
}
