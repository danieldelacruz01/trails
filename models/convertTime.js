var moment = require('moment');
moment().format('h:mm:ss');

function convertMoment(start, end){
  start = moment.unix(start)
  end = moment.unix(end)
  var diff = Math.floor((end - start) / 1000)
  diff = moment(diff).format('h:mm:ss')
  console.log("TRAIL TIME", diff)//output is 2:30:00
  return diff
}
// convertMoment(1460944800000,1460953800000)




module.exports = {
 convertMoment:convertMoment
}
