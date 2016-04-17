// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
// var startTime = 1460857343284;
// var endtime = 1460857506429;
// var date = new Date(startTime*1000);


// // Hours part from the timestamp
// //var hours = date.getHours();

// // Minutes part from the timestamp
// var minutes = "0" + date.getMinutes();


// // Seconds part from the timestamp
// var seconds = "0" + date.getSeconds();

// // Will display time in 10:30:23 format
// //var formattedTime1 = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
// var formattedTime1 = minutes.substr(-2) + ':' + seconds.substr(-2);
// var formattedTime2 = minutes2.substr(-2) + ':' + seconds2.substr(-2);

// var result = formattedTime1 - formattedTime2;

// console.log("the time is:", result);

function getTime(start, end){
  var convertTime = start-end

  var showTime = new Date(convertTime*1000);
  //var hours = showTime.getHours()
  var minutes = "0" + showTime.getMinutes();
  var seconds = "0" + showTime.getSeconds();
  var formattedTime = minutes.substr(-2) + ':' + seconds.substr(-2);

    console.log("time is", formattedTime)
}
getTime(1460880744012,1460880887531)

function subtractTime(){
  var a = new Date();
  var b = a.getTime();
  console.log(b)
}

