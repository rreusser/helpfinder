'use strict'

import  React from 'react-native'
import styles from './styles'

var {
  View,
  Text,
  TouchableOpacity,
  Platform
} = React

export default class Button extends React.Component {
  componentDidMount () {
    if (Platform.OS === 'web') {
      this._root.setNativeProps({
        style: {
          cursor: 'pointer'
        }
      });
    }
  }

  render () {
    return (
      <TouchableOpacity
        ref={component => this._root = component}
        {...this.props}
        style={[styles.btn, this.props.style]}
      >
        {this.props.label ? <Text style={styles.btnText}>{this.props.label}</Text> : []}
        {this.props.children}
      </TouchableOpacity>
    )
  }
}
