/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import Header from './Component/HeaderContent';
import AtasContent from './Component/AtasContent';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <AtasContent />
      </View>
    );
  }
}
