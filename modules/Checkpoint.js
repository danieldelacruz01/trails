import React from 'react'
import {Button, Well} from 'react-bootstrap'

export default React.createClass({

  loadClass () {
    var currentCheckpoint = this.props.checkpoint
    if (this.props.checkingLocation) {
      return <img src={currentCheckpoint.imgUrl} className='checkpoint-image spinner' />
    } else {
      return <img src={currentCheckpoint.imgUrl} className='checkpoint-image ' />
    }
  },
  render () {

  getInitialState(){
    return {hintEnabled: false}
  },
  loadClass(){
   var currentCheckpoint = this.props.checkpoint
    if (this.props.checkingLocation){
      return <img src={currentCheckpoint.imgUrl} className="checkpoint-image spinner"/>
    }
    else {
      return <img src={currentCheckpoint.imgUrl} className="checkpoint-image "/>
    }
  },
  toggleHint(){
    this.setState({
      hintEnabled: !this.state.hintEnabled
    })
  },
  showHint(){
    if (this.state.hintEnabled){
      return (
        <div>
          <br/>
          <Well bsSize="small">
            {this.props.checkpoint.hint}
          </Well>
        </div>
      )
    }
  },
  showDistance() {
    var currentCheckpoint = this.props.checkpoint
      if (currentCheckpoint.distanceInMeters){return (<div>Distance from last checkpoint: {currentCheckpoint.distanceInMeters} metres</div>)
      } else {
        return (<div>Visit the landmark above to start your run</div>)
      }
    },
  render() {
    return (
      <div>
        {this.loadClass()}
          <ul>
            <li>
              Hint:
              {currentCheckpoint.hint}
            </li>
            <li>
              Distance from last checkpoint:
              {currentCheckpoint.distance} metres
            </li>
            <div>
            {this.props.status}
            </div>
          </ul>
        {this.loadClass()}
        {this.showDistance()}
        <Button onClick={this.toggleHint}>Show hint</Button>
        {this.showHint()}
      </div>
    )
  }
})
