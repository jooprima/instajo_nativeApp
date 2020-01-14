/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Header from './Component/HeaderContent';
import {View} from 'native-base';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}
