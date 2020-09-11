import React, { Component } from "react";
import { Container, Content, Form, Item, Input, Label, View, Text, Button } from 'native-base';
import { Image } from 'react-native';
import { styles } from './style.js';
import axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    user = user => {
        this.setState({
            username: user
        })
    }

    password = password => {
        this.setState({
            password: password
        })
    }

    login = () => {
        console.log(this.state.password)
        var postData = {
            username: this.state.username,
            password: this.state.password
        }
        axios.post(`http://156.67.219.57/api/login`,postData).then(response =>{
            this.props.navigation.navigate('Home')
                    }).catch(error => {
                        console.log(error)
                    })
       

    }

    // componentWillMount(){

    // }

    // componentDidMount() {
    //         axios.get(`https://pamdes.herokuapp.com/api/data-desa`).then(response =>{
    //             console.log(response)
    //         }).catch(error => {
    //             console.log(error)
    //         })
    // }

    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: '#00e6ac', justifyContent: 'center' }}>
                <Content style={{ marginTop: 60 }}>
                    <Image style={{ flex: 1, width: 150, height: 150, marginLeft: 120 }} source={require('../../asset/gambar/logo.png')} />
                    <Text style={{ fontSize: 25, textAlign: 'center' }}>PERUSAHAN AIR MINUM</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 5, fontSize: 12 }}>DESA PRINGGASELA</Text>
                    <Text style={{ textAlign: 'center', marginBottom: 18, fontSize: 12 }}>KECAMATAN PRINGGASELA KABUPATEN LOMBOK TIMUR</Text>
                    <View style={{ flex: 1, height: 200, marginRight: 2, borderColor: 'transparent' }}>
                        <Form>
                            <Item regular style={{ borderColor: 'transparent' }}>
                                <Input onChangeText={this.user} style={styles.inputText} placeholder="Nama" underlineColorAndroid='transparent' placeholderTextColor="#ffff" />
                            </Item>
                            <Item regular style={{ borderColor: 'transparent' }}>
                                <Input onChangeText={this.password} placeholder="Sandi" style={styles.inputText} underlineColorAndroid='transparent' placeholderTextColor="#ffff" secureTextEntry={true} />
                            </Item>
                        </Form>
                        <Button rounded light style={{ flex: 1, marginTop: 10 }} onPress={this.login} >
                            <Text>Login</Text>
                        </Button>
                    </View>
                    <Text style={{ textAlign: 'center' }}>Create By Neni Geometri dan Syamsul</Text>
                </Content>
            </Container>
        );
    }
}
export default Login;