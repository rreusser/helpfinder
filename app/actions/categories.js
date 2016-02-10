'use strict'

import {
  CATEGORY_FETCH_CATEGORIES,
  CATEGORY_FETCH_CATEGORIES_COMPLETE,
  CATEGORY_FETCH_CATEGORIES_FAILED,
} from 'app/reducers/categories'

export function fetchCategories () {
  return dispatch => {
    dispatch({
      type: CATEGORY_FETCH_CATEGORIES,
      API_CALL: {
        url: 'categories',
        success: (data) => {
          dispatch({
            type: CATEGORY_FETCH_CATEGORIES_COMPLETE,
            categories: data
          })
        }
      }
    })
  }
}

