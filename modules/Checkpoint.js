import React from 'react'
import Timer from './Timer'

export default React.createClass({
  loadClass(){
  var currentCheckpoint = this.props.checkpoint
    if (this.props.checkingLocation){
      return <img src={currentCheckpoint.imgUrl} className="checkpoint-image spinner"/>
    }
    else {
      return <img src={currentCheckpoint.imgUrl} className="checkpoint-image "/>
    }
  },
  render(){
    var currentCheckpoint = this.props.checkpoint
    return (
      <div>
        {this.loadClass()}
        <ul>
          <li>Hint: {currentCheckpoint.hint}</li>
          <li>Distance from last checkpoint: {currentCheckpoint.distance} metres</li>
          <div>{this.props.status}</div>
        </ul>
      </div>
    )
  }
})
