import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

import Checkpoint from './Checkpoint'

var trail = {
  checkpoints: [
    {
      name:"Bucket Fountain",
      imgUrl: "https://static.panoramio.com.storage.googleapis.com/photos/medium/128007719.jpg",
      latitude: -41.292271,
      longitude: 174.776314,
      hint: "splash splash",
      timeLimit: null,
      distance: null,
      description: "people like to put dye and/or dishwashing liquid in the water"
    },
    {
      name:"Civic Square",
      imgUrl: "https://static.panoramio.com.storage.googleapis.com/photos/medium/44666064.jpg",
      latitude: -41.288817,
      longitude: 174.777226,
      hint: "giant floating ball thing",
      timeLimit: 240,
      distance: 400,
      description: "good place to eat on your lunch break"
    }
  ]
}

export default React.createClass({

  getInitialState(){
    return {currentCheckpoint: 0}
  },

  nextCheckpoint(e) {
    e.preventDefault()
    this.setState({
      currentCheckpoint: this.state.currentCheckpoint + 1
    });
  },

  prevCheckpoint(e) {
    e.preventDefault()
    this.setState({
      currentCheckpoint: this.state.currentCheckpoint - 1
    });
  },

	render(){
    console.log(this.state, "this is the trail state")
		return (
			<div>
				<h2>MVP trail</h2>
        <Checkpoint checkpoint={trail.checkpoints[this.state.currentCheckpoint]}/>
        <button onClick={this.prevCheckpoint}>Previous</button>
        <button onClick={this.nextCheckpoint}>Next</button>
			</div>
		)
	}
})