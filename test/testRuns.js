var request = require('supertest');
var app = require('../server');
var test = require('tape');
//var Knex = require('knex');
//var config = require('../knexfile')

//var knex = Knex(config[process.env.NODE_ENV || 'test'])

test('get status code 200 from /v1/runs', function(t) {
    request(app)
    .get('/v1/runs')
    .expect(200)
    .end(function(){
      t.end()
    })
  // knex.migrate.rollback()
  // .then(function(){
  //   return knex.migrate.latest()
  // })
  // .then(function(){
  //   return knex.seed.run()
  // })
  // .then(function(){
  //   request(app)
  //   .get('/v1/runs')
  //   .expect(200)


  // })
  // .catch(console.log)
  // .finally(function(){
  //   knex.destroy(function(){
  //     console.log('knex closed down')
  //   })
  // })
})

// test('get status code 200 from /v1/runs', function(t) {
//   request(app)
//   .get('/v1/runs')
//   .expect(200)
//   .end(function(err, res){
//     t.false(err, 'no error for false')
//     t.true(res.body.hasOwnProperty('name'), 'res.body returns an object that has a property called name')
//     t.equal(res.body.name.length, 13, "returns all names")
//     t.end()
//   })
// })
