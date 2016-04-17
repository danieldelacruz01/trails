import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'
import request from 'superagent'

import Checkpoint from './Checkpoint'
import Timer from './Timer'

var trail = {}
request
  .get('./v1/trail')
  .end(function(err,res){
    trail = res.body
  })

export default React.createClass({
  getInitialState(){
    return {currentCheckpoint: 0, timeRemaining: 0}
  },
	nextCheckpoint(e) {
    e.preventDefault()
    if (this.state.currentCheckpoint < trail.checkpoints.length - 1){
	    this.setState({
	      currentCheckpoint: this.state.currentCheckpoint + 1,
	      timeRemaining: this.state.timeRemaining + trail.checkpoints[this.state.currentCheckpoint+1].timeLimit
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
	        <Checkpoint checkpoint={trail.checkpoints[this.state.currentCheckpoint]}/>
	        <button onClick={this.nextCheckpoint}>Start</button>
				</div>
			)
		}
		return (
			<div>
				<h2>MVP trail</h2>
        <Checkpoint checkpoint={trail.checkpoints[this.state.currentCheckpoint]}/>
        <Timer/>
        <button onClick={this.prevCheckpoint}>Previous</button>
        <button onClick={this.nextCheckpoint}>Next</button>
			</div>
		)		
	}
})