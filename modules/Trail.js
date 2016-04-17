import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'
import request from 'superagent'

import Timer from './Timer'

import run from '../models/run'
import location from '../models/location.js'
import Checkpoint from './Checkpoint'
import Promise from 'promise'

var testing = true
var trail = {}
if (testing) {
  trail = {
    checkpoints: [
    {
      name:"EDA Campus",
      imgUrl: "https://lh3.googleusercontent.com/Wm9kLUI11vIwyMEkUb40jtH13n74CoV7XaTgOJLZAELLbqxndQnEY30_579P5L0wAu8=w2048-h1365-rw-no",
      latitude: -41.296912,
      longitude: 174.773789,
      hint: "you are sitting right there!",
      timeLimit: 240,
      distance: 1000,
      description: "good place to learn to code"
    },
    {
      name:"Bucket Fountain",
      imgUrl: "https://static.panoramio.com.storage.googleapis.com/photos/medium/128007719.jpg",
      latitude: -41.296912,
      longitude: 174.773789,
      hint: "splash splash",
      timeLimit: null,
      distance: null,
      description: "people like to put dye and/or dishwashing liquid in the water"
    },
    {
      name:"Civic Square",
      imgUrl: "https://static.panoramio.com.storage.googleapis.com/photos/medium/44666064.jpg",
      latitude: -41.296912,
      longitude: 174.773789,
      hint: "giant floating ball thing",
      timeLimit: 240,
      distance: 400,
      description: "good place to eat on your lunch break"
    },
       {
      name:"Five",
      imgUrl: "https://static.panoramio.com.storage.googleapis.com/photos/medium/128007719.jpg",
      latitude: -41.296912,
      longitude: 174.773789,
      hint: "Five splash",
      timeLimit: null,
      distance: null,
      description: "people like to put dye and/or dishwashing liquid in the water"
    },
    {
      name:"Six",
      imgUrl: "https://static.panoramio.com.storage.googleapis.com/photos/medium/44666064.jpg",
      latitude: -41.296912,
      longitude: 174.773789,
      hint: "Six floating ball thing",
      timeLimit: 240,
      distance: 400,
      description: "good place to eat on your lunch break"
    },
       {
      name:"Seven",
      imgUrl: "https://static.panoramio.com.storage.googleapis.com/photos/medium/128007719.jpg",
      latitude: -41.296912,
      longitude: 174.773789,
      hint: "Seven splash",
      timeLimit: null,
      distance: null,
      description: "people like to put dye and/or dishwashing liquid in the water"
    },
    {
      name:"Eight",
      imgUrl: "https://static.panoramio.com.storage.googleapis.com/photos/medium/44666064.jpg",
      latitude: -41.296912,
      longitude: 174.773789,
      hint: "Eight floating ball thing",
      timeLimit: 240,
      distance: 400,
      description: "good place to eat on your lunch break"
    },
       {
      name:"Nine",
      imgUrl: "https://static.panoramio.com.storage.googleapis.com/photos/medium/128007719.jpg",
      latitude: -41.296912,
      longitude: 174.773789,
      hint: "Nine splash",
      timeLimit: null,
      distance: null,
      description: "people like to put dye and/or dishwashing liquid in the water"
    },
    {
      name:"Ten",
      imgUrl: "https://static.panoramio.com.storage.googleapis.com/photos/medium/44666064.jpg",
      latitude: -41.296912,
      longitude: 174.773789,
      hint: "Ten floating ball thing",
      timeLimit: 240,
      distance: 400,
      description: "good place to eat on your lunch break"
    }
  ]
  }
} else {
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
    return {currentCheckpoint: 0}
  },
  finishRun(e){
    run.getTimestamp()
      .then(function(timestamp){
        runDetails.endTime = timestamp
        runDetails.name = "Piet"
        run.postRunDetails(runDetails)
      })
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
            console.log('!', pass)
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
	render(){
		if (this.state.currentCheckpoint === 0){
		  return (
				<div>
					<h2>MVP trail</h2>
          <h2>Checkpoint {this.state.currentCheckpoint+1} of {trail.checkpoints.length}</h2>
          <Checkpoint checkpoint={trail.checkpoints[this.state.currentCheckpoint]}/>
	        <button onClick={this.nextCheckpoint}>Start</button>
				</div>
			)
		}
    if (this.state.currentCheckpoint+1 === trail.checkpoints.length){
      return (
        <div>
          <h2>MVP trail</h2>
          <h2>Checkpoint {this.state.currentCheckpoint+1} of {trail.checkpoints.length}</h2>
          <Checkpoint checkpoint={trail.checkpoints[this.state.currentCheckpoint]}/>
          <button onClick={this.finishRun}>Finish</button>
        </div>
      )
    }
		return (
			<div>
				<h2>MVP trail</h2>
        <h2>Checkpoint {this.state.currentCheckpoint+1} of {trail.checkpoints.length}</h2>
        <Checkpoint checkpoint={trail.checkpoints[this.state.currentCheckpoint]}/>
        <Timer/>
        <button onClick={this.prevCheckpoint}>Previous</button>
        <button onClick={this.nextCheckpoint}>Next</button>
			</div>
		)		
	}
})
