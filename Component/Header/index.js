import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle, Text } from 'native-base';
import {Image} from 'react-native'
export default class HeaderTitleSubtitleExample extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
        <Header style={{backgroundColor:'#00e6ac'}} >
          <Body > 
        
            <Title><Image style={{ width: 20, height: 20 }} source={require('../../asset/gambar/logo.png')} /> {this.props.title} </Title>
          </Body>
        </Header>
      
    );
  }
}