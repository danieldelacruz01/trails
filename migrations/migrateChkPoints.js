exports.up = function (knex, Promise) {
  console.log('create table checkpoints')

  return knex.schema.createTableIfNotExists('checkpoints', function (table) {
    table.increments('chkId')
    table.string('locationName')
    table.string('description')
    table.integer('latitude')
    table.integer('longitude')
    table.string('imgUrl')
    table.integer('timeLimit')
    table.integer('distanceInMetres')
    table.string('hint')
    table.integer('trailId')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('checkpoints').then(function () {
    console.log('checkpoints table was dropped')
  })
}
