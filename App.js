/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Button, Content, Container} from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Button Danger>
            <Text>tes button</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
