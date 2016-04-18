import React from 'react'
import request from 'superagent'
import Promise from 'promise'

export default React.createClass({
  displayRankings(){
    return <li>Winner</li>
  },
  render() {
    return (
      <div>
        <h2>Leaderboard</h2>
          <ul>
            {this.displayRankings}
          </ul>
      </div>
    )
  }
})
