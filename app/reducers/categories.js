'use strict'

import { Map } from 'immutable'
import reducerMapping from 'app/store/reducer-mapping'

export const CATEGORY_FETCH_CATEGORIES = 'CATEGORY_FETCH_CATEGORIES'
export const CATEGORY_FETCH_CATEGORIES_COMPLETE = 'CATEGORY_FETCH_CATEGORIES_COMPLETE'
export const CATEGORY_FETCH_CATEGORIES_FAILED = 'CATEGORY_FETCH_CATEGORIES_FAILED'

window.Map = Map

var initialState = Map({
  fetching: false,
  fetchFailed: false,
  categories: Map(),
})

var map = {}

map[CATEGORY_FETCH_CATEGORIES] = (state, action) => {
  return state.set('fetching', true)
              .set('fetchFailed', false)
              .set('categories', Map())
}

map[CATEGORY_FETCH_CATEGORIES_COMPLETE] = (state, action) => {
  return state.withMutations(map => {
    map.set('fetching', false)
       .set('fetchFailed', false)
       .update('categories', categories => {
         return categories.withMutations(map => {
           action.categories.reduce((result, category) => result.set(category.id, category), map)
         })
       })
  })
}

map[CATEGORY_FETCH_CATEGORIES_FAILED] = (state, action) => {
  return state.set('fetching', false)
              .set('fetchFailed', true)
}

export default reducerMapping(initialState, map)
