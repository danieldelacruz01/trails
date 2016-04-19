import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import About from './modules/About'
import Trail from './modules/Trail'
import Home from './modules/Home'
import Login from './modules/Login'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <indexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/trail" component={Trail}/>
      <Route path="/login" component={Login}/>
    </Route>
  </Router>
), document.getElementById('app'))
