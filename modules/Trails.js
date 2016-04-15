import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Trails</h2>
        <ul>
          <li><NavLink to="/trails/reactjs/react-router">Trail route</NavLink></li>
          <li><NavLink to="/trails/facebook/react">Clues</NavLink></li>
        </ul>
        {this.props.children}
      </div>
      )
  }
})
