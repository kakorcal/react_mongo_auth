import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
// index route is used when nothing else is specified
export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/signup' component={Signup}/>
    <Route path='/login' component={Login}/>
  </Route>
)