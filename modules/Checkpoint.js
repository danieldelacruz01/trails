import React from 'react'
import {Well} from 'react-bootstrap'
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
        <div>Hint <span class="caret"></span></div>
        <Well bsSize="small">{currentCheckpoint.hint}</Well>
        
        <div>Distance from last checkpoint: {currentCheckpoint.distance} metres</div>
      </div>
    )
  }
})
