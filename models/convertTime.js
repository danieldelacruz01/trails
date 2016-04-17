function convertToMinutes(time){
  var date = new Date();
  var minutes = date.getMinutes();
  if (minutes<10){
  console.log("Your time is 0", + minutes + " minutes")
  }
  else {
  console.log("Your time is", + minutes + " minutes")
  }
}
//uncomment to test
//convertToMinutes(1460880744012)




module.exports = {
 convertToMinutes:convertToMinutes
}
