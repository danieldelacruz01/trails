import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import About from './modules/About'
import Trails from './modules/Trails'
import Trail from './modules/Trail'
import Home from './modules/Home'



render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
      <Route path="/trails" component={Trails}>
        <Route path="/trails/:userName/:trailName" component={Trail}/>
      </Route>
      <Route path="/about" component={About}>
        <Route path="/trail" component={Trail}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))

console.log("DanDomLou - this is the index.js")
