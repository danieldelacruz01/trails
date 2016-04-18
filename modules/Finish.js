import React from 'react'

import run from '../models/run'

export default React.createClass({
  getInitialState(){
    console.log(this.props)
    return {
      startTime: this.props.runDetails.startTime,
      endTime: this.props.runDetails.endTime,
      name: ""
    }
  },
  handleNameChange(e){
    e.preventDefault()
    this.state.name = e.target.value
    console.log(this.state)
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
            onChange={this.handleNameChange}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
})