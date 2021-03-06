exports.up = function (knex, Promise) {
  console.log('create table runs')

  return knex.schema.createTableIfNotExists('runs', function (table) {
    table.increments('runId')
    table.integer('startTime')
    table.integer('endTime')
    table.string('name')
    table.string('trailTime')
    table.integer('trailId')
    table.string('profilePic')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('runs').then(function () {
    console.log('runs table was dropped')
  })
}
