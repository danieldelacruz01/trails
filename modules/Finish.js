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
  },
  handleSubmit(e){
    e.preventDefault()
    console.log(this.state)
    run.postRunDetails(this.state)
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
          />
          <button type="button">Cancel</button>
          <input type="submit"/>
        </form>
      </div>
    )
  }
})