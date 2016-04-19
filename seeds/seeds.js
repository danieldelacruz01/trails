exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('runs').del(),

    // Inserts seed entries
    knex('runs').insert({runId: 1, startTime:  1460944800000, endTime:1460948400000, name:'Daniel',trailTime:'1:00:00', trailId: 1}),
    knex('runs').insert({runId: 2, startTime:  1460944800000, endTime:1460948460000, name: 'Dominic', trailTime:'1:01:00',trailId: 1}),
    knex('runs').insert({runId: 3, startTime:  1460944800000, endTime: 1460948280000, name: 'Louise', trailTime:'0:58:00',trailId: 1}),
    knex('runs').insert({runId: 4, startTime:  1460944800000, endTime:1460948940000, name:'Piet',trailTime:'1:09:00', trailId: 1}),
    knex('runs').insert({runId: 5, startTime:  1460944800000, endTime:1460948880000, name: 'Simon', trailTime:'1:08:00',trailId: 1}),
    knex('runs').insert({runId: 6, startTime:  1460944800000, endTime:1460948880000, name: 'Mix', trailTime:'1:08:00', trailId: 1}),
    knex('runs').insert({runId: 7, startTime:  1460944800000, endTime:1460948700000, name:'Mel',trailTime:'1:05:00', trailId: 1}),
    knex('runs').insert({runId: 8, startTime:  1460944800000, endTime:1460949120000, name: 'Toby', trailTime:'1:11:00',trailId: 1}),
    knex('runs').insert({runId: 9, startTime:  1460944800000, endTime: 1460949120000, name: 'Lucy', trailTime:'1:11:00',trailId: 1}),
    knex('runs').insert({runId: 10, startTime:  1460944800000, endTime:1460949300000, name:'Suresh',trailTime:'1:15:00', trailId: 1}),
    knex('runs').insert({runId: 11, startTime:  1460944800000, endTime:1460948580000, name: 'Josh', trailTime:'1:03:00',trailId: 1}),
    knex('runs').insert({runId: 12, startTime:  1460944800000, endTime:1460948850000, name: 'Rosie', trailTime:'1:07:30', trailId: 1}),
    knex('runs').insert({runId: 13, startTime:  1460944800000, endTime: 1460948310000, name: 'Rohan', trailTime:'0:58:30', trailId: 1})
    );
};
