var express = require('express');
var path = require('path');
var compression = require('compression');
var fs = require('fs');

var Knex = require('knex')
var knexConfig = require('./knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])

var app = express()

//var runsData = require('../../models/runsData')

app.use(compression())
console.log("server running")
// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

app.use(function(req, res, next){
  res.status(404).redirect('/')
})
// send all requests to index.html so browserHistory in React Router works
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/v1/trail', function (req, res) {
  fs.readFile('checkpoint-data.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
  console.log('hello trailblazer here is your data')
});

// app.get('/v1/runs', function (req,res,next) {
//   console.log("hello")
//   knex.select('*').from('runs')
//     .then(function(res){
//       //console.log(res)
//       res.json(res)

//     })
//     .catch(function(error){
//       console.log(error)
//     });
// });
app.get('/v1/runs', function (req,res) {
  fs.readFile('runs.json', 'utf8', (err, data) => {
    if(err) throw err;
    res.json(JSON.parse(data));
    console.log('hello dandonlou here is runs data',data)
  });
});

app.post('/v1/runs', function (req, res) {
  var data = {
   "id": 4,
   "startTime": 360,
   "endTime": 60,
   "userId": 4
 }
 fs.writeFile('runs.json', 'data', 'utf8', (err) => {
   if(err) throw err;
     //res.send('Post request')
     res.json(JSON.stringify("post request", data));
   });
 console.log("New data sent to file")
});

app.get('/v1/leaderboard', function (req,res){
  fs.readFile('leaderboard.json', 'utf8', (err,data) => {
    if(err) throw err;
    res.json(JSON.parse(data));
    console.log("Leaderboard data", data)
  });
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
    console.log("leaderboard updated")
  });
});



var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})


