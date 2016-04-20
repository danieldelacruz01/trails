import React from 'react'
import {ListGroup, ListGroupItem, Image} from 'react-bootstrap'

export default React.createClass ({
  render () {
    const leaderboard = this.props.leaders || []
    var names = leaderboard.map(function(leader){
      return (
        <ListGroupItem>
          <Image className="profilePic" circle src={leader.profilePic}/>
          <br/>
          {leader.name} - {leader.trailTime}
        </ListGroupItem>
      )
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
