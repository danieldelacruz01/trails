import React from 'react'
import {IndexLink, Link} from 'react-router'
import {ButtonGroup, Button} from 'react-bootstrap'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render () {
    return (
      <div>
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
