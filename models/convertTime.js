var moment = require('moment');
var getDate = Date.now()

moment().format('h:mm:ss');

function convertMoment(start, end){
  start = moment.unix(start)
  end = moment.unix(end)
  var diff = Math.floor((end - start) / 1000)
  diff = moment(diff).format('h:mm:ss')
  console.log("TRAIL TIME", diff)
  return diff
}

//output is 2:30:00 if using the timestamps below
// convertMoment(1460944800000,1460953800000)




module.exports = {
 convertMoment:convertMoment
}
