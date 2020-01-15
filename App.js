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
import Contents from './Component/Contents';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <View style={{height:100}}>
          <AtasContent />
        </View>
        <Contents />
      </View>
    );
  }
}
