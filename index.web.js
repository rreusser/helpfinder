'use strict';

import React, { AppRegistry } from 'react-native';
import App from './app/views/app';

AppRegistry.registerComponent('Helpfinder', () => App);

var app = document.createElement('div')
document.body.appendChild(app)
AppRegistry.runApplication('Helpfinder', {
  rootTag: app
})
