'use strict'

import  React from 'react-native'

var {
  View,
  Platform
} = React

export default class DesktopContainer extends React.Component {
  static defaultProps = {
    maxWidth: 600
  };

  componentDidMount () {
    if (Platform.OS === 'web') {
      this._root.setNativeProps({
        style: {
          maxWidth: this.props.maxWidth + 'px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }
      })
    }
  }

  render () {
    return (
      <View ref={c => this._root = c}>
        {this.props.children}
      </View>
    )
  }
}
