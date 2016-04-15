// Pseudocode trail functions the user activates

function getUserLocation() {
    return Geolocation.getCurrentPosition()
}

function checkCorrectCheckpoint(checkpointLocation) {
  return checkpointLocation === getUserLocation()

}


function nextCheckpoint(currentCheckpoint) {
  return checkpoints[currentCheckpoint+ 1]
}

function endOfTrail() {
    return winMessage()
}
