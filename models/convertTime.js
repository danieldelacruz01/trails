var moment = require('moment');

function convertMoment(start, end){
  var startMoment
  var endMoment
  
  if (start > end){
    startMoment = moment(end);
    endMoment = moment(start);
  } else {
    startMoment = moment(start);
    endMoment = moment(end);
  }
  var secondsDifference = endMoment.diff(startMoment, 'seconds')
  
  return moment()
    .startOf('day')
    .seconds(secondsDifference)
    .format('H:mm:ss')
}

module.exports = convertMoment
