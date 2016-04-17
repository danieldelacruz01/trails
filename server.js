var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var compression = require('compression')
var fs = require('fs')

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
  //console.log('hello trailblazer here is your data')
});

app.get('/v1/runs', function (req,res) {
  fs.readFile('runs.json', 'utf8', (err, data) => {
    if(err) throw err;
    res.json(JSON.parse(data));
    //console.log('hello dandonlou here is runs data',data)
  });
});

app.get('/v1/timestamp', function (req,res) {
  res.json(Date.now())
});

app.post('/v1/runs', function (req, res) {
  console.log(req.body)
  fs.writeFile('runs.json', JSON.stringify(req.body), 'utf8', (err) => {
    if(err) throw err;
    console.log("New data sent to file")
  });
});

app.get('/v1/leaderboard', function (req,res){
  fs.readFile('leaderboard.json', 'utf8', (err,data) => {
    if(err) throw err;
    res.json(JSON.parse(data));
    //console.log("Leaderboard data", data)
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


