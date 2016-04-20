import React from 'react'
import { render } from 'react-dom'
import App from './src/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import About from './src/About'
import TrailSelector from './src/TrailSelector'
import Home from './src/Home'

render((
  <Router history = {browserHistory}>
    <Route path = '/' component = {App}>
      <IndexRoute component = {Home}/>
      <Route path = '/about' component = {About}/>
      <Route path = '/trail' component = {TrailSelector}/>
    </Route>
  </Router>
), document.getElementById('app'))
