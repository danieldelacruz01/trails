import React from 'react'
import {IndexLink, Link} from 'react-router'
import NavLink from "./NavLink"
import Home from "./Home"



export default React.createClass({
  render() {
    return (
      <div>
        <h1>DanDomLou the trailblazers</h1>
        <ul role="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><NavLink to="/about" >About</NavLink></li>
          <li><NavLink to="/Trails" >Trails</NavLink></li>
        </ul>
        {this.props.children || <Home/>}
      </div>
    )
  }
})
