
function getUserLocation() {
  if (navigator.geolocation) {
    var userCoords = navigator.geolocation.getCurrentPosition(function(position){
      return position.coords
    })
    return userCoords
  }
  else {
    x.innerHTML = 'Geolocation not supported by this browser'
  }
}

// function showPosition(position) {
//   x.innerHTML = 'Latitude: ' + position.coords.latitude +
//   "<br>Longitude: " +position.coords.longitude
// }

function compareUserToCheckpoint(checkpointCoords){
  var range = 0.00005
  var userCoords = getUserLocation()

  return
   (userCoords.latitude <= checkpointCoords.latitude+range && userCoords.latitude >= checkpointCoords.latitude-range) &&
   (userCoords.longitude <= checkpointCoords.longitude+range && userCoords.longitude >= checkpointCoords.longitude-range)
}

function verifyUserPosition(){
  if (compareUserToCheckpoint(currentCheckpoint)){
      nextCheckpoint(currentCheckpoint)
  }
  else{

  }
}


function userAtEndOfTrail() {


}

module.exports = {
  verifyUserPosition: verifyUserPosition
}
