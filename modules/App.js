import React from 'react'
import { IndexLink, Link } from 'react-router'
import NavLink from './NavLink'
import Home from './Home'
import {IndexLink, Link} from 'react-router'
import {ButtonGroup, Button} from 'react-bootstrap'
import NavLink from "./NavLink"
import Home from "./Home"

export default React.createClass({
  render () {
    return (
      <div>
        <h1>T R A I L S</h1>
          <ul role = 'nav'>
            <li>
              <IndexLink to = '/' activeClassName = 'active'>
              Home
              </IndexLink>
            </li>
            <li>
              <NavLink to = '/about'>
              About
              </NavLink>
            </li>
            <li>
              <NavLink to = '/trail'>
              Trail
            </NavLink>
            </li>
          </ul>
        <IndexLink to = '/'><img id = 'logo' src = './logo.png'/></IndexLink>
          <div className = 'row'>
          <div className = 'col-xs-12'>
            <ButtonGroup justified bsSize = 'large'>
              <IndexLink to = '/' activeClassName = 'active'><Button className = 'nav-button'>Home</Button></IndexLink>
                <NavLink to = '/about' ><Button className = 'nav-button'>About</Button></NavLink>
                <NavLink to = '/trail' ><Button className = 'nav-button'>Trail</Button></NavLink>
            </ButtonGroup>
          </div>
        </div>
      {this.props.children}
      </div>
    )
  }
})
