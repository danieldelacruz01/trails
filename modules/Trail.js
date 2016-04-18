import React from 'react'
import { browserHistory } from 'react-router'
import request from 'superagent'
import Promise from 'promise'

import run from '../models/run'
import location from '../models/location.js'

import Leaderboard from './Leaderboard'
import NavLink from './NavLink'
import Checkpoint from './Checkpoint'
import Timer from './Timer'
import Finish from './Finish'

var testing = true
var trail = {}
if (testing) {
   trail = {
    "checkpoints": [
      {
      "id": 1,
      "locationName": "Bucket Fountain",
      "description": "bucket and water feature",
      "latitude": -41.296912,
      "longitude": 174.773789,
      "imgUrl": "http://www.stuff.co.nz/content/dam/images/1/a/5/m/t/v/image.related.StuffLandscapeSixteenByNine.620x349.1a2huc.png/1457654617914.jpg",
      "timeLimit": null,
      "distanceInMeters": null,
      "hint": ["Farmers are near ", "Where's Havana?"]
      },
      {
      "id": 10,
      "locationName": "Former Post and Telegraph Building",
      "description": "Historic building",
      "latitude": -41.296912,
      "longitude": 174.773789,
      "imgUrl": "http://2.bp.blogspot.com/-CuYZRaiKnOA/Tq_NXXuTgDI/AAAAAAAABSM/7MDpO07DYa0/s1600/post_and_telegraph3.jpg",
      "timeLimit": 360,
      "distanceInMeters": 500,
      "hint": ["Can't by stamps here anymore ", "curvature"]
      }
    ]
  }
}
else {
  request
    .get('./v1/trail')
    .end(function(err,res){
      trail = res.body
    })
}
var runDetails = {
  startTime: 0,
  endTime: 0,
  name: ""
}

export default React.createClass({
  getInitialState(){
    return {currentCheckpoint: 0, completed: false, checkingLocation: false, message:false}
  },
  finishRun(e){
    run.getTimestamp()
      .then(function(timestamp){
        runDetails.endTime = timestamp
        this.setState({completed:true})
      }.bind(this))
  },
	nextCheckpoint(e) {
    e.preventDefault()
    if (this.state.currentCheckpoint === 0){
      run.getTimestamp()
        .then(function(timestamp){
          runDetails.startTime = timestamp
        })
      }
    if (this.state.currentCheckpoint < trail.checkpoints.length-1){
      var currentCheckpoint = this.state.currentCheckpoint
      this.setState({checkingLocation: true, message:false})
      location.verifyUserPosition(trail.checkpoints[currentCheckpoint])
        .then(function(pass){
          if(pass){
            this.setState({
              currentCheckpoint: this.state.currentCheckpoint + 1,
              checkingLocation: false
            });
          }
          else {
            this.setState({checkingLocation:false, message: "Sorry, try again!"})
            return
          }
        }.bind(this))
        .catch(function(error){})
    }
  },
  createButtonDiv(){
    var buttonDiv = <div><Timer/><button onClick={this.nextCheckpoint}>Next</button></div>
    if (this.state.currentCheckpoint === 0){
      buttonDiv = <div><button onClick={this.nextCheckpoint}>Start</button></div>
    }
    if (this.state.currentCheckpoint+1 === trail.checkpoints.length) {
      buttonDiv = <div><button onClick={this.finishRun}>Finish</button></div>
    }
    return buttonDiv
  },
	render(){
    if (this.state.completed){
      return (
        <div>
          <Finish runDetails={runDetails}/>
        </div>
      )
    }
 		return (
			<div>
				<h2>MVP Trail</h2>
        <h2>Checkpoint {this.state.currentCheckpoint+1} of {trail.checkpoints.length}</h2>
        <Checkpoint checkpoint={trail.checkpoints[this.state.currentCheckpoint]} checkingLocation={this.state.checkingLocation}/>
        {this.createButtonDiv()}
        {this.state.message}
      </div>
		)
	}
})
