var Promise = require('promise')

function getUserLocation() {
  var promise = new Promise (function (resolve, reject) {
    if (navigator.geolocation) {
      var userCoords = navigator.geolocation.getCurrentPosition(function(position){
        resolve(position.coords)
      })
    }
    else { reject('Geolocation not supported by this browser')}
  })
  return promise
}

function verifyUserPosition(checkpointCoords){
  var promise = new Promise(function(resolve,reject){
    getUserLocation()
      .then(function(userCoords){
        resolve(verifyUserCoordsInRange(userCoords, checkpointCoords))
      })
      .catch(function(error){})
  })
  return promise
}

function verifyUserCoordsInRange(userCoords, checkpointCoords){
    var range = 0.00008
    return (userCoords.latitude<=checkpointCoords.latitude+range &&
            userCoords.latitude>=checkpointCoords.latitude-range) &&
          (userCoords.longitude<=checkpointCoords.longitude+range &&
            userCoords.longitude>=checkpointCoords.longitude-range)
}

module.exports = {
  verifyUserPosition: verifyUserPosition,
}
