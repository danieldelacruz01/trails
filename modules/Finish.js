import React from 'react'

import run from '../models/run'
import convertMoment from '../models/convertTime'

export default React.createClass({
  getInitialState(){
    return {
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
    }
  },
  render(){
    return (
      <div>
        <h2>Finished!</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            onChange={this.handleNameChange}
            required
          />
          <button type="button">Cancel</button>
          <input type="submit"/>
        </form>
      </div>
    )
  }
})