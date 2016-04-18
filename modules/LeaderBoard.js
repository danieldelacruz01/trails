import React from 'react'
import request from 'superagent'
import Promise from 'Promise'

export default React.createClass({
  getRankings(){
      request.get('./v1/runs').end(function(err, res){
          if (err) reject(err)
          else resolve(<li>1 + ": " + res.body[0].name</li>)
      }
    })
  },

  render() {
    return (
      <div>
        <h2>Leaderboard</h2>
          <ul>
            {this.getRankings()}
          </ul>
      </div>
    )
  }
})
