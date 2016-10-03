import React from 'react'
import ReactDOM from 'react-dom'
import {Router, browserHistory} from 'react-router'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import routes from './routes'
import rootReducer from './rootReducer'
import './styles/base.scss'

const store = createStore(
  // rootReducer - takes state and action to return new state
  rootReducer,
  // initail state
  // middleware
  compose(
    // thunk lets us dispatch async actions
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);