exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('runs').del(),

    // Inserts seed entries
    knex('runs').insert({runId: 1, startTime: 1460857277992, endTime:1460857524363, name:'Daniel'}),
    knex('runs').insert({runId: 2, startTime: 1460857324960, endTime:1460857547881, name: 'Dominic'}),
    knex('runs').insert({runId: 3, startTime: 1460857343284, endTime:1460857506429, name: 'Louise'})
  );
  // two returns?
  return console.log("hi, seeds are planted")
};
console.log("seeded")
