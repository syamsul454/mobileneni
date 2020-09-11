import React, { Component } from 'react';
import { Container, Content, View, Text, Button, Input, Item} from 'native-base';
import { TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modalbox';
import Fotter from '../Footer';
import Head from '../Header'
import { styles } from './styles.js'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            idpelanggan: ''
        }
    }
    
    render() {
        return (
            <Container>
                <Head title={'Profile'} />
                <Content>
                    <View style={styles.logo}>
                    <Image  style={styles.logo} source={require('../../asset/gambar/profile.png')} ></Image>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.name}>Hasan Basri</Text>
                        <View style={styles.biodata}>
                            <View style={styles.listbiodata} >
                            <Text style={styles.biodatatext}>Jabatan</Text>
                            <Text style={styles.biodatatext}>Nip</Text>
                            <Text style={styles.biodatatext}>Alamat</Text>
                            <Text style={styles.biodatatext}>Nomor Hp</Text>
                            </View>
                            <View style={styles.listBiodata1}>
                            <Text style={styles.biodatatext}>: Petugas Lapangan</Text>
                            <Text style={styles.biodatatext}>: 34437355374</Text>
                            <Text style={styles.biodatatext}>: kedondong daya</Text>
                            <Text style={styles.biodatatext}>: 0823457357</Text>
                            </View>
                        </View>
                    </View>
                </Content>
                <Fotter navigation={this.props.navigation} />
            </Container>
        );
    }
}
export default Profile