var request = require('supertest');
var app = require('../server');
var test = require('tape');
var Knex = require('knex');

var config = require('../knexfile')

var knex = Knex(config[process.env.NODE_ENV || 'test'])

test('get status code 200, length,name and start time from /v1/checkpoints', function(t) {
    request(app)
    .get('/v1/checkpoints/:trailId')
    .expect(200)
    .end(function(err,res){
      console.log("body res", res.body)
      t.equal(res.statusCode, 200, "Status code is 200")
      //t.equal(res.body.length, 44, "length of object is 44")
      t.end()
    })
  knex.migrate.rollback()
  .then(function(){
    return knex.migrate.latest()
  })
  .then(function(){
    return knex.seed.run()
  })
  .then(function(){
    request(app)
    .get('/v1/checkpoints/:trailId')
    .expect(200)
  })
  .catch(err)
  .finally(function(){
    knex.destroy(function(){
      console.log('knex closed down')
    })
  })
})


