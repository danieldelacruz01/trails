import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
      <h2>About</h2>
        <ul>
          <li><NavLink to="/trail">DanDomLou</NavLink></li>
        </ul>
                {this.props.children}

      </div>
      )
  }
})
