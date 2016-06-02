process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var dotenv = require('dotenv').load()
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var compression = require('compression')
var fs = require('fs')
var passport = require('passport')
var Strategy = require('passport-facebook').Strategy
var session = require('express-session')
var Knex = require('knex')

var knexConfig = require('./knexfile')

var knex = Knex(knexConfig[process.env.NODE_ENV || 'development'])
var app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(require('cookie-parser')())
app.use(require('body-parser').urlencoded({extended: true}))
app.use(require('express-session')({secret: 'keyboard cat', resave: true, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(compression())
app.use(bodyParser.json())

passport.use(new Strategy({
  clientID: process.env.FACEBOOK_ID,
  clientSecret: process.env.FACEBOOK_SECRET,
  callbackURL: 'https://trails-app.herokuapp.com/login/facebook/return',
  profileFields: ['id', 'displayName', 'photos']
},
function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile)
}))

passport.serializeUser(function(user, cb){
  cb(null, user)
})
passport.deserializeUser(function(obj, cb) {
  cb(null, obj)
})

app.get('/', function (req, res) {
  res.status(200).send('ok')
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('/login/facebook',
  passport.authenticate('facebook'))

app.get('/login/facebook/return',
  passport.authenticate('facebook',{failureRedirect: '/login'}),
  function(req, res){
    res.redirect('/trail')
  })

app.get('/v1/fbdetails', function (req, res){
  res.json(req.session.passport.user._json)
})

app.get('/v1/checkpoints/:trailId', function (req,res,next) {
  knex.select('*').from('checkpoints').where({trailId: req.params.trailId})
    .then(function(resp){
      res.send(resp)
    })
    .catch(function(error){
      console.log(error)
    })
})

app.get('/v1/runs/:runId', function (req,res,next) {
  knex.select("*").from("runs").where({runId: req.params.runId})
    .then(function(resp){
      res.send(resp)
    })
    .catch(function(error){
      console.log(error)
    })
})

app.get('/v1/timestamp', function (req,res) {
  res.json(Date.now())
})

app.post('/v1/runs', function (req, res) {
  knex.insert(req.body).into('runs')
    .then(function(resp){
      res.send(resp)
    })
    .catch(function(error){
      console.log(error)
    })
})

app.get('/v1/leaderboard', function (req, res) {
  knex.select('*').from('runs').orderBy('trailTime', 'asc').limit(10)
    .then(function(resp){
      res.send(resp)
    })
    .catch(function(error){
      console.log(error)
    })
  })

app.use(function (req, res) {
  res.redirect('/')
})

module.exports = app

var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})
