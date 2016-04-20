var request = require('supertest');
var app = require('../server');
var test = require('tape');
var Knex = require('knex');

var config = require('../knexfile')

var knex = Knex(config[process.env.NODE_ENV || 'test'])

test('post new run entry data to /v1/runs', function(t){
  request(app)
  .post('/v1/runs')
  .send({
    "startTime" :1461063600000,
    "endTime" :1461066900000,
    "name" :'Lou',
    "trailTime" :'0:55:00',
    "trailId" :2
  })
  .expect(200)
  .end(function(err,res){
    console.log("Who", res.body)
    t.false(err, "No error returned")
    t.equal(res.statusCode, 200, "status is 200 ")
    t.equal(res.body[3].name, "lou", "name is Lou")
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
    .post('v1/runs')
    .expect(200)
  })
  .catch(console.log)
  .finally(function(){
    knex.destroy(function(){ // or process.exit?
    console.log('knex closed down')
    })
  })
})

