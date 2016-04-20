import React from 'react'
import request from 'superagent'
import {InputGroup, Form, FormControl, Button} from 'react-bootstrap'
import run from '../models/run'
import convertMoment from '../models/convertTime'
import Leaderboard from './LeaderBoard'

var quickest = []
run.getRankings()
  .then(function (rankings) {
    quickest = rankings
  })
export default React.createClass({
  getInitialState () {
    return {
      displayLeaderboard: false,
      leaderboardImageUrl: null,
      name: undefined
    }
  },
  handleNameChange (e) {
    e.preventDefault()
    this.state.name = e.target.value
  },
  handleSubmit (e) {
    e.preventDefault()

    let start = parseInt(this.props.runDetails.startTime)
    let end = parseInt(this.props.runDetails.endTime)
    let trailTime = convertMoment(start, end)

    let runDetails = {
      startTime: start,
      endTime: end,
      trailId: this.props.runDetails.trailId,
      name: this.state.name,
      trailTime: trailTime
    }
    if(this.state.leaderboardImageUrl){
      runDetails["profilePic"] = this.state.leaderboardImageUrl
    } else {
      runDetails["profilePic"] = "http://dk6kcyuwrpkrj.cloudfront.net/wp-content/uploads/sites/45/2014/05/avatar-blank.jpg"
    }
    if(runDetails.name && runDetails.trailTime){
      run.postRunDetails(runDetails)
      run.getRankings()
      .then(function(rankings){
        quickest = rankings
        this.setState({displayLeaderboard: true})
      }.bind(this))
    }
  },
  skipSubmit(e){
    e.preventDefault()
    this.setState({displayLeaderboard: true})
  },
  componentDidMount(){
    request.get('/v1/fbdetails').end(function(err, res){
      this.setState({
        name: res.body.name,
        leaderboardImageUrl: res.body.picture.data.url
      })
    }.bind(this))
  },
  render(){
    if(this.state.displayLeaderboard){
      return (
        <div>
          <Leaderboard leaders={quickest}/>
        </div>
      )
    }
    return (
      <div>
        <h2>Finished!</h2>
        <InputGroup>
          <FormControl type="text" placeholder="Your Name" value={this.state.name} onChange={this.handleNameChange} required/>
          <InputGroup.Button>
            <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
          </InputGroup.Button>
        </InputGroup>
        <br/>
        <Button onClick={this.skipSubmit}>Skip</Button>
      </div>
    )
  }
})
