import React, { Component } from 'react';
import { Footer, FooterTab, Button} from 'native-base';
import { createStackNavigator } from 'react-navigation';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

 class FooterTabsIconTextExample extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <Footer style={{backgroundColor:'#00e6ac'}}>
          <FooterTab style={{backgroundColor:'#00e6ac'}}>
            <Button vertical   onPress = {() => this.props.navigation.navigate('Home')} >
            <Icon name="home" size={20} color={'white'} />
            </Button>
            <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Pembayaran')} >
            <Icon name="star" size={20} color={'white'} />
            </Button>
            <Button vertical >
            <Icon name="user" onPress={() => this.props.navigation.navigate('Profile')} size={20} color={'white'} />
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
export default FooterTabsIconTextExample