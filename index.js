import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import About from './modules/About'
import Trail from './modules/Trail'
import Home from './modules/Home'

render((
  <Router history = {browserHistory}>
    <Route path = '/' component = {App}>
      <indexRoute component = {Home} />
      <Route path = '/about' component = {About} />
      <Route path = '/trail' component = {Trail} />
    </Route>
  </Router>
  ), document.getElementById('app'))
