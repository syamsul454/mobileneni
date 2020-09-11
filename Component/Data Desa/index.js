import React, { Component } from 'react';
import { Container, Content, View, Text } from 'native-base';
import {TouchableOpacity,Alert} from 'react-native';
import axios from 'axios';
import {styles} from './styles.js'
import Fotter from '../Footer';
import Head from '../Header';

class Desa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            desa: [],
            dusun: ['Dusun Gubuk Daya', 'Dusun Gubuk Barat', 'Dusun Tempasan', 'Dusun Dasan Sadar', 'Dusun Gubuk Baret Selatan']
        }
    }

    alert = desa => {
        const d = desa
       this.props.navigation.navigate('Dusun', {namadesa : d })
    }
    componentDidMount(){
        axios.get(`http://156.67.219.57/api/data-desa`).then(response =>{
                this.setState({
                    desa : response.data
                })
                    }).catch(error => {
                        console.log(error)
                    })
    }
    render() {
        return (
            <Container>
                <Head title = {'Data Desa'} />
                <Content>
                    <Text style={styles.title}>Pilih Desa</Text>
    
                    <View style={styles.desa}>
                        {this.state.desa.map((desa, index) =>
                        <TouchableOpacity onPress = {() => this.alert(desa.id)}>
                            <View style={styles.listdesa}>
                                <Text style={{ textAlign: "center", lineHeight: 50, fontSize: 20, color: 'white' }}>
                                    {desa.name}
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
export default Desa