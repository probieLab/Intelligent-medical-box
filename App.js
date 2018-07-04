/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Login from './app/login/login';
import Main from './app/reset_main/mian';
import Vedio from './app/videoCalls/videoCall';
import Doctor from './app/doctor/doctor';
import Detail from './app/detailMain/detailMain';
import {
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <TotalNav/>
    )
  }
}
const TotalNav = StackNavigator({
  Login: { screen: Login },
  Main: { screen: Main },
  Vedio: { screen: Vedio },
  Doctor: { screen: Doctor },
  Detail: { screen: Detail },
})

