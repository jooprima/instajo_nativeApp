import React, {Component} from 'react';

import {Footer, Button, Icon, FooterTab} from 'native-base';

export default class FooterContent extends Component {
  render() {
    return (
      <Footer >
        <FooterTab style={{backgroundColor: 'white'}}>
          <Button>
            <Icon style={{color:'black'}} active name="home" />
          </Button>
          <Button>
            <Icon name="search" style={{color:'black'}}/>
          </Button>
          <Button>
            <Icon name="add" style={{color:'black'}}/>
          </Button>
          <Button>
            <Icon name="heart" style={{color:'black'}}/>
          </Button>
          <Button>
            <Icon name="person" style={{color:'black'}}/>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
