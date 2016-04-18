import React from 'react'
import request from 'superagent'
import run from '../models/run'

var winners = "Louise"

export default React.createClass({
  getInitialState(){
    return {
      rankings: []
    }
  },
  getRankings(){
    run.getRankings()
      .then(function(leaderboard){
        return this.displayRankings(leaderboard)
      }.bind(this))
  },
  displayRankings(rankingsArr){
    console.log(rankingsArr)
    winners = rankingsArr[0]
    return winners
  },
  render() {
    return (
      <div>
        <h2>Leaderboard</h2>
        <ul>
          {this.props.rankings[0]}
        </ul>
      </div>
    )
  }
})
