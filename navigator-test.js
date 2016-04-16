var x = document.getElementById('demo')

function getUserLocation() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
    else {
      x.innerHTML = 'Geolocation not supported by this browser'
    }
}

function showPosition(position) {
  x.innerHTML = 'Latitude: ' + position.coords.latitude +
  "<br>Longitude: " +position.coords.longitude
}

function compareUserToCheckpoint(checkpointLocation){
  var range = 0.00005
  //User coords would be from getUserLocation() in production
  var userCoords = getUserLocation()
  var checkpointCoords = checkpointLocation

  return (userCoords.latitude <= checkpointCoords.latitude+range && userCoords.latitude >= checkpointCoords.latitude-range) &&
   (userCoords.longitude <= checkpointCoords.longitude+range &&
    userCoords.longitude >= checkpointCoords.longitude-range)
}

