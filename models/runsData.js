var Knex = require('knex');
var knexConfig = require('../knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

function all(){
 return knex.select().from('runs')//outputs select * from 'runs'
}

function getTimes(){
  return knex('startTime', 'endTime', 'name').from('runs')
}

function insertTimes(){ //the key values need to come from js variables
  return knex('runs').insert({runId: 'runId'},{startTime:'startTime'},{endTime:'endTime'},{name:'getTimes'})
}

module.exports ={
  all: all,
  getTimes: getTimes,
  insertTimes: insertTimes
}
