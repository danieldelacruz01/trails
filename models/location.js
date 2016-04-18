var Promise = require('promise')

// example callback interface
// module.exports = function (coords, callback) {
//   if (!navigator.geolocation) {
//     callback(new Error('geolocation not supported'))
//   } else {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       callback(
//         null, 
//         verifyUserCoordsInRange(position.coords, coords, 0.0008)
//       )
//     }
//   }
// }

// example promises interface
// module.exports = function (coords) {
//   return new Promise(function(resolve, reject) {
//     if (!navigator.geolocation) {
//       reject(new Error('geolocation not supported'))
//     } else {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         resolve(verifyUserCoordsInRange(position.coords, coords, 0.0008))
//       })
//     }
//   })
// }


function getUserLocation() {
  // http://eslint.org/docs/rules/no-spaced-func   
  var promise = new Promise (function (resolve, reject) {
    if (navigator.geolocation) {
      // http://eslint.org/docs/rules/no-spaced-func
      var userCoords = navigator.geolocation.getCurrentPosition(function(position){
        resolve(position.coords)
      })
    }
    // https://github.com/airbnb/javascript#blocks--cuddled-elses
    else { reject('Geolocation not supported by this browser')}
  })
  return promise
}

function verifyUserPosition(checkpointCoords){
  // can just return the new Promise directly 
  // rather than variable assignment
  // then return
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
  // how could you use pythagoras' theorem to clean up this code?
    var range = 0.00008
    // http://eslint.org/docs/rules/space-infix-ops
    return (userCoords.latitude<=checkpointCoords.latitude+range &&
            userCoords.latitude>=checkpointCoords.latitude-range) &&
          (userCoords.longitude<=checkpointCoords.longitude+range &&
            userCoords.longitude>=checkpointCoords.longitude-range)
}

// just export the function
module.exports = {
  verifyUserPosition: verifyUserPosition,
}
