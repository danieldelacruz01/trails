var request = require('supertest');
var app = require('../server');
var test = require('tape');
var Knex = require('knex');

var config = require('../knexfile')

var knex = Knex(config[process.env.NODE_ENV || 'test'])

test('get v1/checkpoints filtered by trailId of 2', function(t){
  request(app)
      .get('/v1/checkpoints')
      .query({trailId: '2'})
      .expect(200)
      .end(function(err, res){
        console.log("length ",res.body)
        t.false(err, 'no error for false')
        t.equal(res.body.length, 10, "returns all checkpoints with trail id 2")
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
    .get('/v1/checkpoints')
    .expect(200)
  })
  .catch(console.log)
  .finally(function(){
    knex.destroy(function(){
      console.log('knex closed down')
    })
  })
})


