import React from 'react'
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap'
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
        <div>Distance from last checkpoint: {currentCheckpoint.distance} metres</div>
        <DropdownButton bsStyle="default" title="Show Hint">
          <MenuItem>{currentCheckpoint.hint}</MenuItem>
        </DropdownButton>       
      </div>
    )
  }
})
