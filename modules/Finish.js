import React from 'react'

import run from '../models/run'

export default React.createClass({
  getInitialState(){
    let endTime
    run.getTimestamp()
      .then(function(timestamp){
        endTime = timestamp
        return {
          startTime: this.props.runDetails.startTime,
          endTime: timestamp,
          name: ""
        }
      })
        
  },
  handleNameChange(e){
    e.preventDefault()
    this.setState({name: e.target.value})
  },
  handleSubmit(e){

  },
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
})