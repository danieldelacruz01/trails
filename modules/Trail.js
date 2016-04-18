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
      "id": 2,
      "locationName": "Civic Square",
      "description": "public space with galleries",
      "latitude": -41.296912,
      "longitude": 174.773789,
      "imgUrl": "http://www.sculptures.org.nz/__data/assets/image/0003/1767/te-aho-a-maui.jpg",
      "timeLimit": 240,
      "distanceInMeters": 400,
      "hint": ["Place of books ", "How civil of you"]
      },
      {
      "id": 3,
      "locationName": "Bronze Statue",
      "description": "On the harbour",
      "latitude": -41.296912,
      "longitude": 174.773789,
      "imgUrl": "http://www.weekendnotes.com/im/008/06/solace-in-the-wind-statue-art-wellington-waterfron.jpg",
      "timeLimit": 480,
      "distanceInMeters": 650,
      "hint": ["Not Te Mama ", "On the waters edge"]
      },
      {
      "id": 4,
      "locationName": "Near the embassy",
      "description": "Scaled up movie camera on tripod",
      "latitude": -41.296912,
      "longitude": 174.773789,
      "imgUrl": "https://macmantravels.files.wordpress.com/2012/03/well_tripod.jpg",
      "timeLimit": 540,
      "distanceInMeters": 650,
      "hint": ["Not an embassy ", "Cambridge, not England"]
      },
      {
      "id": 5,
      "locationName": "The Basin Reserve",
      "description": "Great for a round of cricket",
      "latitude": -41.296912,
      "longitude": 174.773789,
      "imgUrl": "http://static2.stuff.co.nz/1363406548/350/8435350.jpg",
      "timeLimit": 360,
      "distanceInMeters": 750,
      "hint": ["No flyover's here! ", "A round-about there"]
      },
      {
      "id": 6,
      "locationName": "War Memorial",
      "description": "National war memorial park",
      "latitude": -41.296912,
      "longitude": 174.773789,
      "imgUrl": "http://cdn.eventfinda.co.nz/uploads/locations/transformed/119918-5236-34.jpg",
      "timeLimit": 360,
      "distanceInMeters": 500,
      "hint": ["Massive monolith ", "Students mill about"]
      },
      {
      "id": 7,
      "locationName": "Footscray ave/Karo Dr",
      "description": "Historic Buildings",
      "latitude": -41.296912,
      "longitude": 174.773789,
      "imgUrl": "http://www.regangentry.com/files/gimgs/5_2-2009-subject-to-change.jpg",
      "timeLimit": 660,
      "distanceInMeters": 900,
      "hint": ["Main rd out ", "Colourful exterior"]
      },
      {
      "id": 8,
      "locationName": "Matterhorn",
      "description": "a refreshment establishment",
      "latitude": -41.296912,
      "longitude": 174.773789,
      "imgUrl": "http://cdn1.buuteeq.com/upload/24280/matterhorn_wellington_nz_credit_jesssilk_highres_cmyk-6.JPG.1920x810_default.jpeg",
      "timeLimit": 480,
      "distanceInMeters": 700,
      "hint": ["Dine on a peak ", "Horns matter"]
      },
      {
      "id": 9,
      "locationName": "Large marble ball",
      "description": "Museum of New Zealand",
      "latitude": -41.296912,
      "longitude": 174.773789,
      "imgUrl": "http://2.bp.blogspot.com/_IjSQ_ADksow/TH2tk6ZfmQI/AAAAAAAAKXU/bBBQyyGjCM4/s1600/WDP+ballslinedup.jpg",
      "timeLimit": 480,
      "distanceInMeters": 650,
      "hint": ["Floats in an entrance ", "It is not a marble"]
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
    return {currentCheckpoint: 0, completed: false}
  },
  finishRun(e){
    run.getTimestamp()
      .then(function(timestamp){
        runDetails.endTime = timestamp
        run.postRunDetails(runDetails)

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
      location.verifyUserPosition(trail.checkpoints[currentCheckpoint])
        .then(function(pass){
          if(pass){
            this.setState({
              currentCheckpoint: this.state.currentCheckpoint + 1
            });
          }
          else {
             return
          }
        }.bind(this))
        .catch(function(error){})
    }
  },
  prevCheckpoint(e) {
    e.preventDefault()
    if (this.state.currentCheckpoint > 0){
	    this.setState({
	      currentCheckpoint: this.state.currentCheckpoint - 1
	    });
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
        <Checkpoint checkpoint={trail.checkpoints[this.state.currentCheckpoint]}/>
        {this.createButtonDiv()}
      </div>
		)
	}
})
