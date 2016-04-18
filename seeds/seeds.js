exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('runs').del(),

    // Inserts seed entries
    knex('runs').insert({runId: 1, startTime: 1460946600000, endTime:1460953800000, name:'Daniel',trailTime:'2:00:00'}),
    knex('runs').insert({runId: 2, startTime: 1460946600000, endTime:1460954100000, name: 'Dominic', trailTime:'2:05:00'}),
    knex('runs').insert({runId: 3, startTime: 1460946600000, endTime: 1460952300000, name: 'Louise', trailTime:'1:55:00'}),
    knex('runs').insert({runId: 4, startTime: 1460946600000, endTime:1460954160000, name:'Piet',trailTime:'2:06:00'}),
    knex('runs').insert({runId: 5, startTime: 1460946600000, endTime:1460953860000, name: 'Simon', trailTime:'2:01:00'}),
    knex('runs').insert({runId: 6, startTime: 1460946600000, endTime:1460954640000, name: 'Mix', trailTime:'2:11:00'})
  );
};

