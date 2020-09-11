import React, { Component } from 'react';
import { Container, Content, View, Text } from 'native-base';
import {TouchableOpacity,Alert} from 'react-native';
import axios from 'axios';
import {styles} from './styles.js'
import Fotter from '../Footer';
import Head from '../Header';

class Dusun extends Component {
    constructor(props) {
        super(props)
        this.state = {
            desa: ['PRINGGASELA'],
            dusun: [],
            namadesa : ''
        }
    }

    alert = id => {
        this.props.navigation.navigate('Pelanggan',{idDusun : id })
    }
    componentDidMount(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('namadesa');
        axios.get(`http://156.67.219.57/api/data-dusun/`+itemId).then(response =>{
            this.setState({
                dusun : response.data
            })
        
                }).catch(error => {
                    console.log(error)
                })
       
    }

    render() {
       
        return (
            <Container>
                <Head title = {'Data Dusun'} />
                <Content>
                    <Text style={styles.title}>Pilih Dusun</Text>
        <Text style={styles.title}>{this.state.namadesa}</Text>
                    
                    <View style={styles.dusun}>
                        {this.state.dusun.map((dusun, index) =>
                        <TouchableOpacity onPress = {() => this.alert(dusun.id)}>
                            <View style={styles.listdusun} >
                                <Text style={{ textAlign: "center", lineHeight: 50, fontSize: 20, color: 'white' }}>
                                    {dusun.name}
                                </Text>
                            </View>
                            </TouchableOpacity>
                        )}
                    </View>

                </Content>
                <Fotter navigation={this.props.navigation} />
            </Container>
        );
    }
}
export default Dusun