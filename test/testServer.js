var request = require('supertest');
var server = require('../server');// was var app
//var test = require('tape');
var it = require('mocha');
var require = require('really-need');
var expect = require('chai').expect;
var Knex = require('knex');

var config = require('../knexfile')

var knex = Knex(config[process.env.NODE_ENV || 'test'])

describe('loading express', function() {
  var server;
  beforeEach(function (){
    server = require('../server', { bustedCache: true});
  });
  afterEach(function (done) {
    server.close(done);
  });
  it('responds to /', function testSlash(done){
    request(server)
    .get('/')
    .expect(200, done);
  });
  it('404 everything else', function testPath(done) {
    console.log('test 404')
    request(server)
      .get('/foo/bar')
      .expect(404,done);
  });
});
