import React, {Component} from 'react';
import {
  Content,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Icon,
  Right,
} from 'native-base';
import {Image} from 'react-native';

export default class Contents extends Component {
  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                }}
              />
              <Body>
                <Text>jooprima</Text>
                <Text>Indonesia</Text>
              </Body>
            </Left>
            <Right>
              <Icon name="more" />
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              }}
              style={{height: 200, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Icon name="heart" />
            <Icon name="chatbubbles" />
            <Icon name="more" />
          </CardItem>
          <CardItem>
            <Left>
              <Icon name="heart" style={{color:'red'}} />
              <Text>7 Likes</Text>
            </Left>
          </CardItem>
          <CardItem>
            <Text>
              Illo corporis voluptatem. Voluptatem architecto labore tenetur nam
              tempora labore ut ullam in. Ut veniam exercitationem rerum maiores
              est. Aut recusandae et beatae dolore explicabo suscipit.
            </Text>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
