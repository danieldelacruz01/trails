var express = require('express')
var path = require('path')
var compression = require('compression')
var fs = require('fs')

var app = express()

app.use(compression())
console.log("server running")
// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/v1/trail', function (req, res) {
  fs.readFile('checkpoint-data.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
  console.log('hello trailblazer here is your data')
  });

app.get('/v1/runs', function (req,res) {
  fs.readFile('runs.json', 'utf8', (err, data) => {
    if(err) throw err;
    res.json(JSON.parse(data));
  });
  console.log('hello dandonlou here is runs data',data)
  });
var data = {
           "id": 4,
           "startTime": 360,
           "endTime": 60,
           "userId": 4
          }

app.post('/v1/runs', function (req, res) {
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
  });
  console.log("Leaderboard data", data)
})


var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})


