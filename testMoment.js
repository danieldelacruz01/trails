var test = require('tape')
var moment = require('moment');
moment().format('h:mm:ss');

function convertMoment(start, end){
  start = moment.unix(start);
  end = moment.unix(end);
  return start + ":" + end;
}

var first = 1460934768400;
var second = 1460934934026;


test('times formatted correctly', function (t) {
  t.equal(convertMoment(first,first), 'returns start and end time 11:12:48':'11:15:34')
  t.end()
})
