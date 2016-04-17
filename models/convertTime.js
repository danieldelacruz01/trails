//time is either start or end timestamp passsed in
function convertToMinutes(time){
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  if (hour<10 ) {
    hour = "0" + hour;
    if(minutes<10){
      minutes = "0" + minutes;
      if(seconds<10){
        seconds = "0" + seconds;
      }
    }
    console.log("Your time is " + hour + ":" + minutes + ":" + seconds)
  }
  else {
  console.log("Your time is " + hour + ":" + minutes + ":" + seconds)
  }
}

convertToMinutes(1460880744012)




module.exports = {
 convertToMinutes:convertToMinutes
}
