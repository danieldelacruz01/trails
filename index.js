import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import About from './modules/About'
import TrailSelector from './modules/TrailSelector'
import Home from './modules/Home'
import Login from './modules/Login'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/login" component={Login}/>
      <Route path="/trail" component={TrailSelector}/>
    </Route>
  </Router>
), document.getElementById('app'))
