exports.up = function(knex, Promise) {

  console.log('create table checkpoints2')

  return knex.schema.createTableIfNotExists('checkpoints2', function(table){
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
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('checkpoints2').then(function (){
    console.log('checkpoints2 table was dropped')
  })
};
