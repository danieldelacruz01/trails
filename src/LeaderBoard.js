import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

export default React.createClass ({
  render () {
    const leaderboard = this.props.leaders || []
      var names = leaderboard.map(function(leader){
        return <ListGroupItem>{leader.name} - {leader.trailTime}</ListGroupItem>
      })
      return (
        <div>
          <h2>Leaderboard</h2>
          <ListGroup>
          {names}
          </ListGroup>
        </div>
      )
    }
})
