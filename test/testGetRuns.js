var request = require('supertest')
var app = require('../server')
var test = require('tape')
var Knex = require('knex')

var config = require('../knexfile')

var knex = Knex(config[process.env.NODE_ENV || 'test'])

test('get status code 200, length,name and start time from /v1/runs', function (t) {
  request(app)
    .get('/v1/runs')
    .expect(200)
    .end(function (err, res) {
      console.log('body res', res.body.length)
      t.equal(res.statusCode, 200, 'Status code is 200')
      t.equal(res.body.length, 23, 'length of object is 23')
      t.equal(res.body[3].name, 'Piet', 'name is Piet')
      t.equal(res.body[1].startTime, 1460944800000, 'start time is 1460944800000')
      t.end()
    })
  knex.migrate.rollback()
  .then(function () {
    return knex.migrate.latest()
  })
  .then(function () {
    return knex.seed.run()
  })
  .then(function () {
    request(app)
    .get('/v1/runs')
    .expect(200)
  })
  .catch(console.log)
  .finally(function () {
    knex.destroy(function () {
      console.log('knex closed down')
    })
  })
})
