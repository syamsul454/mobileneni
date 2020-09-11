import React, { Component } from 'react';
import { Container,  Content,  Text } from 'native-base';
import { Image } from 'react-native';
import Fotter from '../Footer';
import Head from '../Header'
class FooterTabsIconTextExample extends Component {
    render() {
        return (
            <Container>
                <Head/>
                <Content>
                <Image style={{ flex: 1, width: 150, height: 150, marginLeft: 120 }} source={require('../../asset/gambar/logo.png')} />
                    <Text style={{textAlign:'center'}} >Selamat Datang di Sistem Informai Perusahan Air Minum  Desa Pringgasela</Text>
                </Content>
                <Fotter navigation = {this.props.navigation}  />
            </Container>
        );
    }
}
export default FooterTabsIconTextExample