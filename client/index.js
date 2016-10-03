import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import routes from './routes'
import './styles/base.scss'

const store = createStore(
  // rootreducer - takes state and action to return new state
  (state = {}) => state,
  // initail state
  // thunk lets us dispatch async actions
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);