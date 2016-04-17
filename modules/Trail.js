import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'
import location from '../models/location.js'
import Checkpoint from './Checkpoint'
import Promise from 'promise'

var trail = {
  checkpoints: [
    {
      name:"EDA Campus",
      imgUrl: "https://lh3.googleusercontent.com/Wm9kLUI11vIwyMEkUb40jtH13n74CoV7XaTgOJLZAELLbqxndQnEY30_579P5L0wAu8=w2048-h1365-rw-no",
      latitude: -41.296912,
      longitude: 174.773789,
      hint: "you are sitting right there!",
      timeLimit: 240,
      distance: 1000,
      description: "good place to learn to code"
    },
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
    var currentCheckpoint = this.state.currentCheckpoint
    location.verifyUserPosition(trail.checkpoints[currentCheckpoint])
      .then(function(pass){
        console.log('!', pass)
      })
      .catch(function(error){})
  },

  prevCheckpoint(e) {
    e.preventDefault()
    if (this.state.currentCheckpoint > 0){
	    this.setState({
	      currentCheckpoint: this.state.currentCheckpoint - 1
	    });
    }
  },

	render(){
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
