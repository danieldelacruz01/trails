var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression');

var fs = require('fs');

var Knex = require('knex')
var knexConfig = require('./knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])
var app = express()

app.use(compression())
app.use(bodyParser.json());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/v1/trail', function (req, res) {
  fs.readFile('checkpoint-data.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.get('/v1/runs', function (req,res,next) {
  knex.select("*").from("runs")
    .then(function(resp){
      res.send(resp)
    })
    .catch(function(error){
      console.log(error)
    });
});

app.get('/v1/timestamp', function (req,res) {
  res.json(Date.now())
});

app.post('/v1/runs', function (req, res) {
  knex.insert(req.body).into('runs')
    .then(function(resp){
      res.send(resp)
    })
    .catch(function(error){
      console.log(error)
    });
});

app.get('/v1/leaderboard', function (req,res){
  knex.select("*").from("runs").orderBy('trailTime', 'asc').limit(10)
    .then(function(resp){
      res.send(resp)
    })
    .catch(function(error){
      console.log(error)
    })
  });

app.post('/v1/leaderboard', function (req, res) {
  var data = {
    "id": 8,
    "bestTime": 5800,
    "userId": 4,
    "trailId": 1
  }
  fs.writeFile('leaderboard.json', 'data', 'utf8', (err) => {
    if(err) throw err;
    res.json(JSON.stringify(data));
  });
});

app.use(function(req, res){
  res.redirect('/')
})



module.exports = app;

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
