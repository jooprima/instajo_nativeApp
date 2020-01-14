import React, {Component} from 'react';
import {View, Left, Icon, Body, Text, Right, Header} from 'native-base';

export default class HeaderContent extends Component {
  render() {
    return (
      <View>
        <Header style={{backgroundColor:'white'}}>
          <Left>
            <Icon name="camera" />
          </Left>
          <Body>
            <Text style={{marginLeft:80}}>InstaJo</Text>
          </Body>
          <Right>
            <Icon name="paper-plane" />
          </Right>
        </Header>
      </View>
    );
  }
}
