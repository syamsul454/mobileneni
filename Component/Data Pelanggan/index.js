import React, { Component } from 'react';
import { Container, Content, View, Text } from 'native-base';
import { TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modalbox';
import Fotter from '../Footer';
import Head from '../Header';
import { styles } from './styles.js'

class Pelanggan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPelanggan: [],
            namaDusun:'',
            codePelanggan: ''
        }
    }

    alert = id => {
        this.props.navigation.navigate('Tunggakan',{idPelanggan : id, kodePelanggan : this.state.codePelanggan })
    }

    renderList() {
        var list = [];

        for (var i = 0; i < 50; i++) {
            list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
        }

        return list;
    }

    componentDidMount(){
        const { navigation } = this.props;
        const itemId = navigation.getParam('idDusun');
        axios.get(`http://156.67.219.57/api/pelanggan/`+itemId).then(response =>{
            this.setState({
                dataPelanggan : response.data,
                codePelanggan : response.data.code_pelanggan
            })
        
                }).catch(error => {
                    console.log(error)
                })
    }

    render() {
        return (
            <Container>
                <Head title={'Data Pelanggan'} />
                <Content>
                    {/* <View style={styles.judul}>
                        <Text style={{ fontSize: 20, marginLeft: 10, lineHeight: 50, textAlign: 'center', color: 'white' }}>Data Pelanggan</Text>
                    </View> */}
                    
                    <View style={styles.body}>
                        {this.state.dataPelanggan.map((data, index) => 
                            <TouchableOpacity onPress={() => this.alert(data.id)}>
                                <View style={styles.listPelanggan} >
                                    <View style={styles.listPelangganColumLeft}><Text>Name</Text><Text>Nomor kk</Text><Text>Alamat</Text></View>
                        <View style={styles.listPelangganColumRight}><Text>{data.name}</Text><Text>{data.nomor_kk}</Text><Text>{data.alamat}</Text></View>
                                </View>
                            </TouchableOpacity>
                    )} 
                    </View>
                </Content>
                <Modal style={styles.modalDetail} position={"center"} ref={"modal1"} isDisabled={this.state.isDisabled}>
                    <Text style={styles.modalJudul}>Detail Data Pelanggan</Text>
                    <View
                        style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 2,
                        }}
                    />
                    <View style={styles.modalDetailText}>
                        <View style={styles.TextSub}>
                            <Text>Nama</Text>
                            <Text>Nik</Text>
                            <Text>Desa</Text>
                            <Text>Dusun</Text>
                            <Text>Alamat</Text>
                        </View>
                        <View>
                            <Text>Neni</Text>
                            <Text>8767655646677</Text>
                            <Text>Pringgasela Selatan</Text>
                            <Text>Kedondong Daye</Text>
                            <Text>Waringin Barat</Text>
                        </View>
                    </View>
                </Modal>
                <Fotter navigation={this.props.navigation} />
            </Container>
        );
                    }
    }

export default Pelanggan