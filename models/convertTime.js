var moment = require('moment');
moment().format('h:mm:ss');

function convertMoment(start, end){
  start = moment.unix(start)
  end = moment.unix(end)
  var diff = Math.floor((end - start) / 1000)
  diff = moment(diff).format('h:mm:ss')
  console.log("TRAIL TIME", diff)
  return diff
}
convertMoment(1460948400000,1460948700000)
