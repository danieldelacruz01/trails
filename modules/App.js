import React from 'react'
import {IndexLink, Link} from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import Login from './Login'
export default React.createClass({
  render() {
    return (
      <div>
        <h1>T R A I L S</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/about" >About</NavLink></li>
          <li><NavLink to="/login" >Login</NavLink></li>
          <li><NavLink to="/trail" >Trail</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
