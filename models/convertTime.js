//time is either start or end timestamp passsed in
//http://eslint.org/docs/rules/keyword-spacing.html
// you may want to use moment.js for this http://momentjs.com/
function convertToMinutes(time){
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  // http://eslint.org/docs/developer-guide/code-conventions#operator-spacing
  if (hour<10 ) {
    hour = "0" + hour;
  }
  if(minutes<10){
    minutes = "0" + minutes;
  }
  if(seconds<10){
    seconds = "0" + seconds;
  }
  console.log("Your time is " + hour + ":" + minutes + ":" + seconds);
}



// could just export the funtion rather than export an object with the function as a property
module.exports = {
 convertToMinutes:convertToMinutes
}
