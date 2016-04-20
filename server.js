process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var dotenv = require('dotenv').load()
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var compression = require('compression');
var fs = require('fs');
var passport = require('passport')
var Strategy = require('passport-facebook').Strategy
var session = require('express-session')
var Knex = require('knex')

var knexConfig = require('./knexfile')
var config = require('./_config')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])
var app = express()

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('express-session')({secret: 'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(compression())
app.use(bodyParser.json());

passport.use(new Strategy({
  clientID: config.facebook.clientID,
  clientSecret: config.facebook.clientSecret,
  callbackURL: 'http://localhost:8080/login/facebook/return',
  profileFields: ['id', 'displayName', 'photos']
},
function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile)
}));

passport.serializeUser(function(user, cb){
  cb(null, user);
});
passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/login/facebook',
  passport.authenticate('facebook'));

app.get('/login/facebook/return',
  passport.authenticate('facebook',{failureRedirect: '/login'}),
  function(req, res){
    res.redirect('/trail')
  });

app.get('/v1/fbdetails', function (req, res){
  console.log('rsp', req.session.passport)
  var sessionDetails = {
    id: req.session.passport.user.id,
    displayName: req.session.passport.user.displayName,
    photo: req.session.passport.user.photos[0].value
  }
  res.json(req.session.passport.user._json)
})

app.get('/v1/trail', function (req, res) {
    fs.readFile('checkpoint-data.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.get('/v1/checkpoints/:trailId', function (req,res,next) {
  knex.select('*').from('checkpoints').where({trailId: req.params.trailId})
    .then(function(resp){
      res.send(resp)
    })
    .catch(function(error){
      console.log(error)
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
