'use strict'

import combineReducers from 'app/store/combine-reducers'
import app from './app'
import categories from './categories'

export default combineReducers({
  app: app,
  categories: categories,
})
