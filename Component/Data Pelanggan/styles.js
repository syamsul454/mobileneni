import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    judul : {
        backgroundColor: 'blue'
    },
    body : {
        marginLeft:5,
        marginRight:5,
       
    },
    listPelanggan : {
        flex: 1, 
        backgroundColor:'#00cc99', 
        marginTop: 10,
        flexDirection:'row',
        marginLeft:8,
        marginRight:8,
        height:80,
        borderRadius:10
    },
    listPelangganColumLeft : {
        flex:1,
        marginLeft:20,
        marginTop:10,
        color:'white'
        
    },
    listPelangganColumRight : {
        flex:3,
        marginTop:10,
        
    },
    modalDetail : {
        height:200,
        width:300,
        backgroundColor:'#00b36b',
        borderRadius:20
    },

    modalDetailText : {
            
            flexDirection:'row',
            marginLeft:10,
            marginTop:10,
            height:90
            
    },

    TextSub : {
        color:'white',
        width:70,
        fontSize:20,
        
    },
    modalJudul : {
        color:'white',
        fontSize:25,
        textAlign:'center'
    },
});

