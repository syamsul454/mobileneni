import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    tunggakan : {
        height:100,
        width:'100%',
        backgroundColor:'#00e6ac'
    },

    tunggakanTitle : {
        fontSize: 25,
        fontWeight:'bold',
        marginTop:5,
        marginLeft:10,
        color:'white'
    },

    tunggakanTotal : {
        fontSize: 25,
        fontWeight:'bold',
        marginTop:5,
        marginLeft:10
    },

    rincian : {
        flex : 1,
        backgroundColor: '#f0f5f5'
    },

    rincianTit : {
        fontSize: 20,
        fontWeight:'bold',
        marginLeft:15,
        marginTop:8
    },
    
    blockrincian : {
        width:'95%',
        alignSelf: 'center',
        backgroundColor: '#00e6b8',
        flexDirection:'row',
        borderRadius:10,
        height:88,
        marginTop:5
    },

    jumlahPembayaran1 : {
        flex: 1,
    
    },

    jumlahPembayaran2 : {
        flex: 1,
        textAlign:'right',
    },

    textPleft : {
        marginLeft : 5,
        marginTop: 2,
    },
    textPright : {
        textAlign:'right',
        marginRight: 5,
        marginTop: 2,
    },
 
    add : {
       flex: 1,
        backgroundColor:'blue',
        position:'relative',
        marginBottom: 20,
        borderRadius:50,
    },

    btn : {
        position:'relative',
        alignSelf:'flex-end',
        marginRight:20,
        marginTop:-60,
        
    },

    modal : {
        height:200,
        width:300,
        backgroundColor:'#00b36b',
        borderRadius:20
    },

    modalJudul : {
        textAlign:'center',
        fontSize:25
    },

    modalSend : {
       marginRight:5,
       marginLeft:5,
       marginTop:10
    },
    modalInput : {
        backgroundColor:'#ffff',
        marginRight:5,
       marginLeft:5,
        marginTop:20,
       
       
    }



});