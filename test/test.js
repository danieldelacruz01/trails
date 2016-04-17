var test = require('tape')
var location = require('../models/location.js')

function compareUserToCheckpoint(checkpointCoords, userCoords){
  var range = 0.00005
  //User coords would be from g etUserLocation() in production
  if (checkpointCoords.latitude<0) { checkpointCoords.latitude = Math.sqrt(checkpointCoords.latitude*checkpointCoords.latitude) }
  if (userCoords.latitude<0)       { userCoords.latitude = Math.sqrt(userCoords.latitude*userCoords.latitude) }

 return (userCoords.latitude <= checkpointCoords.latitude+range && userCoords.latitude >= checkpointCoords.latitude-range) &&
   (userCoords.longitude <= checkpointCoords.longitude+range &&
    userCoords.longitude >= checkpointCoords.longitude-range)
}

var mockUserCoordsObj1 = {latitude: -41.296840800000004, longitude: 174.77381740000002}
var mockUserCoordsObj2 = {latitude: -41.296700800000004, longitude: 174.77382740000002}
var mockUserCoordsObj3 = {latitude: -41.29, longitude: 174.77}
var mockUserCoordsObj4 = {latitude: -41.296840800000004, longitude: 174.77389740000002}
var mockUserCoordsObj5 = {latitude: -41.296890800000004, longitude: 174.77386740000002}

var checkpointLocation = {latitude: -41.2968, longitude: 174.7738}

test('Trail checkpoint coords, compare to user coords', function (t) {
   t.true(compareUserToCheckpoint(checkpointLocation, checkpointLocation), 'return identical coords')
   t.true(compareUserToCheckpoint(checkpointLocation, mockUserCoordsObj1), 'return user coords are in range of checkpoint coords')
   t.false(compareUserToCheckpoint(checkpointLocation, mockUserCoordsObj2), 'not return user coords not in range of checkpoint coords')
   t.false(compareUserToCheckpoint(checkpointLocation, mockUserCoordsObj3),'should not return truncated coords')
   t.false(compareUserToCheckpoint(checkpointLocation, mockUserCoordsObj4),'should not return when one user coord is correct but another is incorrect')
   t.end()
})
