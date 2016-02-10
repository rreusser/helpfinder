'use strict'

import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'app/middleware/logger'
import apiMiddleware from 'app/middleware/api'
import devTools from 'remote-redux-devtools'
import config from 'app/config'

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import reducers from 'app/reducers'

var middlewares = [thunkMiddleware, apiMiddleware]

if (config.debug) {
  middlewares.push(loggerMiddleware)
}

const finalCreateStore = compose(
  applyMiddleware(...middlewares),
  devTools()
)(createStore)

export default function configureStore () {

  const store = finalCreateStore(reducers, reducers(null))

  return store
}
