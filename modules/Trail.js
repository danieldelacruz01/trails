import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'
import request from 'superagent'

import Checkpoint from './Checkpoint'
import Timer from './Timer'

import run from '../models/run'

var trail = {}
request
  .get('./v1/trail')
  .end(function(err,res){
    trail = res.body
  })
var runDetails = {}

export default React.createClass({
  getInitialState(){
    return {currentCheckpoint: 0}
  },
	nextCheckpoint(e) {
    e.preventDefault()
    console.log(runDetails)
    if (this.state.currentCheckpoint === 0){
      run.getTimestamp()
        .then(function(timestamp){
          runDetails["startTime"] = timestamp
        })
    }
    if (this.state.currentCheckpoint < trail.checkpoints.length - 1){
	    this.setState({
	      currentCheckpoint: this.state.currentCheckpoint + 1
	    });
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
          <button onClick={this.nextCheckpoint}>Finish</button>
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