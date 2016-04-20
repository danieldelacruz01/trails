import React from 'react'

export default React.createClass({
  render () {
    const leaderboard = this.props.leaders || []
    var names = leaderboard.map(function (leader) {
      return (
        <li>
          {leader.name} -
          {leader.trailTime}
        </li>
      )
    })
    return (
      <div>
        <h2>Leaderboard</h2>
        <ol>
          {names}
        </ol>
      </div>
    )
  }
})
