function convertToMinutes(time){
  var a = new Date();
  var b = a.getMinutes();
  if (b<10){
  console.log("Your time is 0", + b)
  }
  else {
  console.log("Your time is", + b)
  }
}
convertToMinutes(1460880744012)
