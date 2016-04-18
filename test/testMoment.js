var test = require('tape')
var moment = require('moment');
moment().format('h:mm:ss');

function convertMoment(start, end){
  start = moment.unix(start);
  end = moment.unix(end);
  return start + ":" + end;
}
function subtractMoment(start, end){
  start = moment.unix(start);
  end = moment.unix(end);
  var diff = end - start;
  return diff;
}
//tested in node returned '166662647 years'
function humanizeTime(start){
  moment.duration(1460934768400, "hours").humanize();
  return;
}

function convertMoment(start, end){
  start = moment.unix(start);
  end = moment.unix(end);
  var diff = Math.floor((end - start) / 1000)
  diff = moment(diff).format('h:mm:ss');
  console.log("TRAIL TIME", diff);
  return diff;
}

var first = 1460934768400;
var second = 1460934934026;

var first2 = 1460944377796;
var second2 = 1460944772369;

var first3 = 1460944800000; //2:00:00
var second3 = 1460953800000; //04:30:00

test('start, end times and trial times returned and formatted correctly', function (t) {
  t.true(convertMoment(first,second), 'returns start and end times 11:12:48:11:15:34')
  t.true(convertMoment(first,first), 'are equal times 11:12:48:11:12:48')
  t.true(convertMoment(second2,second2), 'are equal times 1:59:32:1:59:32')
  t.true(subtractMoment(first,second), 'the differnce in time is 00:02:86')
  t.true(subtractMoment(first2, second2), 'the difference in time is 00:06:75')
  t.true(convertMoment(second3, first3), 'You completed the trail in 01:30:00')
  t.true(convertMoment(first3, second3), "You completed the trail in 2:30:00")
  t.end()
})

