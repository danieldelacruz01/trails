import React from 'react'
import {InputGroup, Form, FormControl, Button} from 'react-bootstrap'
import run from '../models/run'

import convertMoment from '../models/convertTime'
import Leaderboard from './LeaderBoard'

var quickest = []
run.getRankings()
  .then(function(rankings){
    quickest = rankings
  })

export default React.createClass({
  getInitialState(){
    return {
      displayLeaderboard: false,
      name: null,
    }
  },
  handleNameChange(e){
    e.preventDefault()
    this.state.name = e.target.value
  },
  handleSubmit(e){
    e.preventDefault()

    let start = parseInt(this.props.runDetails.startTime)
    let end = parseInt(this.props.runDetails.endTime)
    let trailTime = convertMoment(start, end)

    let runDetails = {
      startTime: start,
      endTime: end,
      trailId: this.props.runDetails.trailId,
      name: this.state.name,
      trailTime: trailTime
    }
    if(runDetails.name && runDetails.trailTime){
      run.postRunDetails(runDetails)
      run.getRankings()
      .then(function(rankings){
        quickest = rankings
        this.setState({displayLeaderboard: true})
      }.bind(this))
    }
  },
  skipSubmit(e){
    e.preventDefault()
    this.setState({displayLeaderboard: true})
  },
  render(){
    if(this.state.displayLeaderboard){
      return (
        <div>
          <Leaderboard leaders={quickest}/>
        </div>
      )
    }
    return (
      <div>
        <h2>Finished!</h2>
        <InputGroup>
          <FormControl type="text" placeholder="Your Name" onChange={this.handleNameChange} required/>
          <InputGroup.Button>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </InputGroup.Button>
        </InputGroup>
        <br/>
        <Button onClick={this.skipSubmit}>Skip</Button>
      </div>
    )
  }
})
