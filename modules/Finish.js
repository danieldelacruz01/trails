import React from 'react'
import run from '../models/run'
import Leaderboard from './Leaderboard'

var winners = ['Louise']

run.getRankings()
  .then(function(leaderboard){
    winners = leaderboard
  })

export default React.createClass({
  getInitialState(){
    return {
      startTime: this.props.runDetails.startTime,
      endTime: this.props.runDetails.endTime,
      name: ""
    }
  },
  handleNameChange(e){
    e.preventDefault()
    this.state.name = e.target.value
  },
  handleSubmit(e){
    e.preventDefault()
    run.postRunDetails(this.state)
  },
  render(){
    if(winners){
      return (
        <Leaderboard rankings={winners}/>
      )
    }
    return (
      <div>
        <h2>Finished!</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Your Name" onChange={this.handleNameChange}/>
          <button type="button">Cancel</button>
          <input type="submit"/>
        </form>
      </div>
    )
  }
})
