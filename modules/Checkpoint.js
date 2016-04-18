import React from 'react'
import Timer from './Timer'

export default React.createClass({
  render() {
    // you can use destructuring to clean up data access
    const { imgUrl, hint, distance, description } = this.props.checkpoint

    return (
      <div>
        <img src={imgUrl} className="checkpoint-image"/>
        <ul>
          <li>Hint: {hint}</li>
          <li>Distance from last checkpoint: {distance} metres</li>
          <li>Description: {description}</li>
        </ul>
      </div>
    )
  }
})
