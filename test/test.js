var test = require('tape')
//var compareUserToCheckpoint = require('./navigator-test.js')

function compareUserToCheckpoint(checkpointCoords, userCoords){
  var range = 0.00005
  //User coords would be from getUserLocation() in production
  if (checkpointCoords.latitude<0) { checkpointCoords.latitude = Math.sqrt(checkpointCoords.latitude*checkpointCoords.latitude) }
  if (userCoords.latitude<0) {userCoords.latitude = Math.sqrt(userCoords.latitude*userCoords.latitude) }

  console.log('equal?    ', checkpointCoords.latitude == userCoords.latitude)

  return (userCoords.latitude <= checkpointCoords.latitude+range && userCoords.latitude >= checkpointCoords.latitude-range) &&

   (userCoords.longitude <= checkpointCoords.longitude+range &&
    userCoords.longitude >= checkpointCoords.longitude-range)
}

var mockUserCoordsObj1 = {accuracy:94, altitude: null, altitudeAccuracy: null, heading: null, latitude: -41.296880800000004, longitude: 174.77382740000002, speed:null}


var checkpointLocation = {latitude: -41.2968, longitude: 174.7738}

test('Trail checkpoint coords, compare to user coords', function (t) {
   t.true(compareUserToCheckpoint(checkpointLocation, checkpointLocation), 'return identical coords')
   t.true(compareUserToCheckpoint(checkpointLocation, mockUserCoordsObj1), 'return user coords are in range of checkpoint coords')
   t.end()
})











var mockUserCoordsObj2 = {accuracy:94, altitude: null, altitudeAccuracy: null, heading: null, latitude: -41.296880800000004, longitude: 174.77382740000002, speed:null}
var mockUserCoordsObj3 = {accuracy:94, altitude: null, altitudeAccuracy: null, heading: null, latitude: -41.296880800000004, longitude: 174.77382740000002, speed:null}
var mockUserCoordsObj4 = {accuracy:94, altitude: null, altitudeAccuracy: null, heading: null, latitude: -41.296880800000004, longitude: 174.77382740000002, speed:null}
var mockUserCoordsObj5 = {accuracy:94, altitude: null, altitudeAccuracy: null, heading: null, latitude: -41.296880800000004, longitude: 174.77382740000002, speed:null}
