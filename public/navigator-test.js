var x = document.getElementById('demo')

function getUserLocation() {
    console.log('hi')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition)
    }
    else {
      x.innerHTML = 'Geolocation not supported by this browser'
    }
}

function showPosition(position) {
  console.log(position)
  console.log(position.coords)
  x.innerHTML = 'Latitude: ' + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude
}



