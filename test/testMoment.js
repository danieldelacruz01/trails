var test = require('tape')
var moment = require('moment')

var convertMoment = require('../models/convertTime.js')

var start = 1461016620000
var end = 1461019920000
var expected = '0:55:00'

var start2 = 1460936593000
var end2 = 1460943026000
var expected2 = '1:47:13'

test('difference between start and end times returned and formatted correctly', function (t) {
  t.equal(convertMoment(start, end), expected, 'returns difference of 0:55:00')
  t.equal(convertMoment(start2, end2), expected2, 'returns difference of 1:47:13')
  t.equal(convertMoment(end2, start2), expected2, 'Start and end times are interchangeable (doesnt matter which order they are passed in as)')
  t.end()
})
