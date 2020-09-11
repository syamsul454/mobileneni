import React, { Component } from 'react';
import { Container, Content, View, Text, Button, Input, Item } from 'native-base';
import { TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modalbox';
import axios from 'axios';
import Fotter from '../Footer';
import Head from '../Header'
import { styles } from './style.js'

class Pembayaran extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            idpelanggan: '',
            name : '',
            nomorKk : '',
            alamat : '',
            jumlahMeter : '',
            pelangganId : ''
        }
    }
    renderList() {
        var list = [];

        for (var i = 0; i < 50; i++) {
            list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
        }

        return list;
    }

    idpelanggan = idpelanggan => {
        this.setState({
            idpelanggan: idpelanggan
        })
    }

    jumlahMeter = jumlah => {
        this.setState({
            jumlahMeter:jumlah
        })
    }

    checkpelanggan = () => {
        const idpelanggan = this.state.idpelanggan
        axios.get(`http://156.67.219.57/api/check-pelanggan/`+idpelanggan).then(response =>{
            if (response.data.message === 'success get data') {
                this.refs.modal3.close()
                this.refs.modal1.open()
                this.setState({
                    name : response.data.data.name,
                    nomorKk :  response.data.data.nomor_kk,
                    alamat :  response.data.data.alamat,
                    pelangganId : response.data.data.id,
                })
                
            } else {
                this.refs.modal3.open()
            }
            
    
                }).catch(error => {
                    this.refs.modal3.close()
                    this.refs.modal4.open()
                })

    }

    sendData = () => {
        const jumlahMeter = this.state.jumlahMeter
        const pelangganId = this.state.pelangganId
        var data = {
            'pelanggan_id' : pelangganId,
            'pegawai_id' : 1,
            'meter_akhir' : jumlahMeter
        }
        axios.post(`http://156.67.219.57/api/add-debit-air`,data).then(response =>{
                if (response.data.message === 'sucesss') {
                    this.refs.modal1.close()
                    this.refs.modal5.open()
                } else {
                    console.log('gagal')
                }
        
                }).catch(error => {
                    console.log(error)
                })

    }

    render() {
        return (
            <Container>
                <Head title={'Pembayaran'} />
                <Content>
                    <View style={{ justifyContent: 'space-between', height: 200, marginTop: 140, marginLeft: 10, marginRight: 10, }}>
                        <View style={styles.btn} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Desa')}>
                                <Text style={styles.btnText}>
                                    Data Pelanggan
                        </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.btn}>
                            <TouchableOpacity onPress={() => this.refs.modal3.open()} >
                                <Text style={styles.btnText}>
                                    Input Debit Air
                        </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
                {/* modal chek pembayaran */}
                <Modal style={styles.modal} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <Text style={styles.modalJudul}>Input Data Debit Air</Text>
                    <Item rounded style={styles.modalInput} >
                        <Input placeholder='Id Pelanggan' onChangeText={this.idpelanggan} keyboardType={'numeric'} />
                    </Item>
                    <Button rounded style={styles.modalCheck} onPress={this.checkpelanggan} >
                        <Text style={styles.modalCheckText}>Check</Text>
                    </Button>
                </Modal>
                {/* Detail pelanggan */}
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
                            <Text>Alamat</Text>
                        </View>
                        <View>
                    <Text>{this.state.name}</Text>
                            <Text>{this.state.nomorKk}</Text>
                            <Text>{this.state.alamat}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 2,
                            width:150,
                           marginLeft:80
                        }}
                    />
                    <Item rounded style={styles.modalInput} >
                        <Input placeholder='Jumlah Meter Akhir' onChangeText={this.jumlahMeter}  keyboardType={'numeric'} />
                    </Item>
                    <Button rounded style={styles.modalCheck} onPress={this.sendData} >
                        <Text style={styles.modalCheckText}>Send Data</Text>
                    </Button>
                </Modal>
                {/* modal gagal */}
                <Modal style={styles.modalalert} position={"center"} ref={"modal4"} isDisabled={this.state.isDisabled}>
                    <Image style={{width:50, height:50,alignSelf:'center'}} source={require('../../asset/gambar/danger.png')} />
                    <Text style={styles.modalJudul}>Data Pelanggan Tidak Ada !!!</Text>
                </Modal>
                <Modal style={styles.modal} position={"center"} ref={"modal5"} isDisabled={this.state.isDisabled}>
                    <Image style={{width:100, height:100,alignSelf:'center'}} source={require('../../asset/gambar/success.png')} />
                    <Text style={styles.modalJudul}>Data Terkirim !!!</Text>
                </Modal>
                <Fotter navigation={this.props.navigation} />
            </Container>
        );
    }
}
export default Pembayaran