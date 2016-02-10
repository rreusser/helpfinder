'use strict';

import React from 'react-native';
import { connect } from 'react-redux';
import styles from './styles'

import CategorySelector from 'app/views/category-selector'

var {
  View,
  Platform
} = React

class Helpfinder extends React.Component {

  componentDidMount () {
    if (Platform.OS === 'web') {
      this._root.setNativeProps({
        style: {
          //'maxWidth': '600px',
          //'marginLeft': 'auto',
        }
      });
    }
  }

  render() {
    return (
      <View
        style={styles.container}
        ref={component => this._root = component}
      >
        <CategorySelector/>
      </View>
    )
  }
}

export default connect(state => {
  return {}
})(Helpfinder);
