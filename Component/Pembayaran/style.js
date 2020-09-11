import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    btn : {
            width:'100%',
            backgroundColor:'#00b36b',
            height:80,
            borderRadius:50,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
    },
    
    btnText : {
        textAlign:"center", 
        lineHeight:100, 
        fontSize:30, 
        color:'white',
        lineHeight:80
    },

    modal : {
        height:200,
        width:300,
        backgroundColor:'#00b36b',
        borderRadius:20
    },

    modalalert : {
        height:200,
        width:300,
        backgroundColor:'red',
        borderRadius:20
    },
    modalJudul : {
        color:'white',
        fontSize:25,
        textAlign:'center'
    },

    modalInput : {
        backgroundColor:'#ffff',
        width:'90%',
        marginLeft:14,
        marginTop:20,
        borderColor: 'transparent'
       
    },
    modalCheck : {
        width:'90%',
        marginLeft:14,
        marginTop:10,
        textAlign: 'center'
    },

    modalCheckText : {
        marginLeft:95
    },

    modalDetail : {
        height:300,
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
        
    }


});