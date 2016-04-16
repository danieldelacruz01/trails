var Promise = require('promise')

function getUserLocation() {
  var promise = new Promise (function (resolve, reject) {
    if (navigator.geolocation) {
      var userCoords = navigator.geolocation.getCurrentPosition(function(position){
        console.log('GUL', position)
        resolve(position.coords)
      })

    }
    else {
      reject('Geolocation not supported by this browser')
    }
  })
 return promise
}

// function showPosition(position) {
//   x.innerHTML = 'Latitude: ' + position.coords.latitude +
//   "<br>Longitude: " +position.coords.longitude
// }

function verifyUserPosition(checkpointCoords){
  var promise = new Promise(function(resolve,reject){
    var range = 0.00005
    getUserLocation()
      .then(function(userCoords){
        console.log('VUP', userCoords)
      })
      .catch(function(error){})

    resolve(
      (userCoords.latitude <= checkpointCoords.latitude+range && userCoords.latitude >= checkpointCoords.latitude-range) &&
      (userCoords.longitude <= checkpointCoords.longitude+range && userCoords.longitude >= checkpointCoords.longitude-range)
    )
  })
}



function userAtEndOfTrail() {


}

module.exports = {
  verifyUserPosition: verifyUserPosition
}
