import React from 'react'
import Timer from './Timer'

export default React.createClass({
  render(){
    var currentCheckpoint = this.props.checkpoint
    return (
      <div>
        <img src={currentCheckpoint.imgUrl} className="checkpoint-image"/>
        <ul>
          <li>Hint: {currentCheckpoint.hint}</li>
          <li>Distance from last checkpoint: {currentCheckpoint.distance} metres</li>
          <li>Description: {currentCheckpoint.description}</li>
        </ul>
      </div>
    )
  }
})