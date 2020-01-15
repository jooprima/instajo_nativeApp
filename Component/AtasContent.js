import React, {Component} from 'react';
import {Content, Card, CardItem, Thumbnail, Text, Image} from 'native-base';

const dataAtas = [
  {
    nama: 'Your Story',
    gambar:
      'https://images.pexels.com/photos/91224/pexels-photo-91224.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    nama: 'jooprima',
    gambar:
      'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    nama: 'yohanes',
    gambar:
      'https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    nama: 'prima',
    gambar:
      'https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    nama: 'Trisnanto',
    gambar:
      'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
];

export default class AtasContent extends Component {
  render() {
    return (
      <Content horizontal>
        {dataAtas.map((data, index) => {
          return (
            <Card key={index} style={{height:100}} transparent>
              <CardItem style={{flexDirection: 'column'}}>
                <Thumbnail
                  source={{
                    uri: data.gambar,
                  }}
                />
                <Text>{data.nama}</Text>
              </CardItem>
            </Card>
          );
        })}
      </Content>
    );
  }
}
