var request = require('supertest');
var express = require('express');

var app = express();

app.get('/v1/runs', function (req,res,next) {
  knex.select("*").from("runs")
    .then(function(resp){
      res.send(resp)
    })
    .catch(function(error){
      console.log(error)
    });
});

request(app)
  .get('v1/runs')
  .expect('')
