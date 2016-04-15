import React from 'react'
import Timer from './Timer'

export default React.createClass({
  render(){
    var currentCheckpoint = this.props.checkpoint
    console.log(currentCheckpoint.timeLimit)
    return (
      <div>
        <h2>Checkpoint</h2>
        <img src={currentCheckpoint.imgUrl} />
        <ul>
          <li>Hint: {currentCheckpoint.hint}</li>
          <li>Distance from last checkpoint: {currentCheckpoint.distance} metres</li>
          <li>Description: {currentCheckpoint.description}</li>
        </ul>
      </div>
    )
  }
})