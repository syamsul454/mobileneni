import React, { Component } from 'react';
import { Container, Content, View, Text, Button, Input, Item} from 'native-base';
import { TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modalbox';
import axios from 'axios';
import Fotter from '../Footer';
import Head from '../Header'
import { styles } from './style.js'

class Tunggakan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            idpelanggan: '',
            dataPembayaran : [],
            jumlahTunggakan : '',
            jumlahMeter : ''
        }
    }

    renderList() {
        var list = [];

        for (var i = 0; i < 50; i++) {
            list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
        }

        return list;
    }

    jumlahMeter = jumlah => {
        this.setState({
            jumlahMeter:jumlah
        })
    }

    sendData = () => {
        const { navigation } = this.props;
        const idpelanggan = navigation.getParam('idPelanggan');
        const jumlahMeter = this.state.jumlahMeter
        var data = {
            'pelanggan_id' : idpelanggan,
            'pegawai_id' : 1,
            'meter_akhir' : jumlahMeter
        }
        axios.post(`http://156.67.219.57/api/add-debit-air`,data).then(response =>{
                if (response.data.message === 'sucesss') {
                    this.refs.modal5.close()
                    this.componentDidMount()
                } else {
                    console.log('gagal')
                }
        
                }).catch(error => {
                    console.log(error)
                })

    }

    componentDidMount(){
        const { navigation } = this.props;
        const idpelanggan = navigation.getParam('idPelanggan');
        axios.get(`http://156.67.219.57/api/list-pembayaran/`+idpelanggan).then(response =>{
                this.setState({
                    dataPembayaran : response.data.data,
                    jumlahTunggakan : response.data.jumlah_tunggakan
                })
            
    
                }).catch(error => {
                    this.refs.modal3.close()
                    this.refs.modal4.open()
                })
    }
    
    render() {
        return (
            <Container>
                <Head title={'Detail Pembayaran'} />
                <Content>
                    <View>
                        <View style={styles.tunggakan}>
                            <Text style={styles.tunggakanTitle}>Total Tagihan</Text>
        <Text style={styles.tunggakanTitle} >Rp {this.state.jumlahTunggakan}</Text>

            <Button bordered info style={styles.btn} onPress={() =>this.refs.modal5.open()} ><Text>Add Meter Akhir</Text></Button>
                        </View>
                        <View  >
                            <Text style={styles.rincianTit}>Riwayat Pembayaran</Text>
                            {this.state.dataPembayaran.map((Data, index) =>
                            <View style={styles.blockrincian}>
                                <View style={styles.jumlahPembayaran1}>
                                <Text style={styles.textPleft}>Jumlah Tagihan</Text>
                                <Text style={styles.textPleft}>Status Pembayaran</Text>
                                <Text style={styles.textPleft}>Bulan</Text>
                                </View>
                                <View style={styles.jumlahPembayaran2}>
                            <Text style={styles.textPright} > Rp {Data.jumlah_pembayaran}</Text>
                            <Text style={styles.textPright}> {Data.status}</Text>
                            <Text style={styles.textPright}>{Data.months}</Text>
                                </View>
                            </View>   
                                 )}
                        </View>
                    </View>
                </Content>
                <Modal style={styles.modal} position={"center"} ref={"modal5"} isDisabled={this.state.isDisabled}>
                <Text style={styles.modalJudul}>Masukan Data Meteran</Text>
                <Item block style={styles.modalInput} >
                        <Input placeholder='Jumlah Meter Akhir' onChangeText={this.jumlahMeter}  keyboardType={'numeric'} />
                    </Item>
                    <Button block style={styles.modalSend} onPress={this.sendData} >
                        <Text style={styles.modalCheckText}>Send Data</Text>
                    </Button>
                </Modal>
                <Fotter navigation={this.props.navigation} />
            </Container>
        );
    }
}
export default Tunggakan