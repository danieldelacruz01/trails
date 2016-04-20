import React from 'react'
import { browserHistory } from 'react-router'
import {Alert, Button, ProgressBar} from 'react-bootstrap'
import request from 'superagent'

import run from '../models/run'
import location from '../models/location.js'

import NavLink from './NavLink'
import Checkpoint from './Checkpoint'
import Timer from './Timer'
import Finish from './Finish'

var testing = true
var trail = {}

var runDetails = {
  startTime: 0,
  endTime: 0,
  trailId: 0,
  name: ""
}

export default React.createClass({
  getInitialState(){
    return {
      trailLoaded: false,
      currentCheckpoint: 0,
      completed: false,
      checkingLocation: false,
      message:false, }
  },
  componentDidMount(){
    request
      .get(`/v1/checkpoints/${this.props.trailId}`)
      .end(function(err,res){
        trail["checkpoints"] = res.body
        this.setState({trailLoaded: true})
      }.bind(this))
  },
  finishRun(e){
    run.getTimestamp()
      .then(function(timestamp){
        runDetails.endTime = timestamp
        runDetails.trailId = this.props.trailId
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
      location.verifyUserPosition(trail.checkpoints[currentCheckpoint], testing)
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
    var buttonDiv = <div><Button bsSize="large" onClick={this.nextCheckpoint}>Next</Button></div>
    if (this.state.currentCheckpoint === 0){
      buttonDiv = <div><Button bsSize="large" onClick={this.nextCheckpoint}>Start</Button></div>
    }
    if (this.state.currentCheckpoint+1 === trail.checkpoints.length) {
      buttonDiv = <div><Button bsSize="large" onClick={this.finishRun}>Finish</Button></div>
    }
    return buttonDiv
  },
  notAtLocation(){
    if(this.state.message){
      return <Alert bsStyle="warning">{this.state.message}</Alert>
    }
  },
	render(){
    if(!this.state.trailLoaded){
      return <div>Loading Trail...</div>
    }
    if(this.state.completed){
      return (
        <div>
          <Finish runDetails={runDetails}/>
        </div>
      )
    }
 		return (
			<div>
        <Timer/>
        <ProgressBar now={(this.state.currentCheckpoint+1)*10} label={this.state.currentCheckpoint+1 + ' of ' + trail.checkpoints.length} />
        <Checkpoint checkpoint={trail.checkpoints[this.state.currentCheckpoint]} checkingLocation={this.state.checkingLocation}/>
        {this.createButtonDiv()}
        {this.notAtLocation()}
      </div>
		)
	}
})
