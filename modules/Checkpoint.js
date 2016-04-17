import React from 'react'

export default React.createClass({
  render(){
    var currentCheckpoint = this.props.checkpoint
    return (
      <div>
        <h2>Checkpoint</h2>
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