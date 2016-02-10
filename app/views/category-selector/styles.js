'use strict'

import React from 'react-native'

var {
  StyleSheet
} = React

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 50,
    alignItems: 'stretch',
  },
  brand: {
    fontSize: 18,
  },
  heading: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  categoryBtn: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginVertical: 2,
  },
  categoryBtnText: {
    color: '#fff',
    textAlign: 'center',
  },
})

export default styles
