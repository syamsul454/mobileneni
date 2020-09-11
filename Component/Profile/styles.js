import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    body : {
        backgroundColor:'#00b36b',
        height:350,
        marginTop:100,
        borderRadius:30,
        marginLeft:5,
        marginRight:5
    },
    logo: {
        width: 150,
        height:150,
        position:"absolute",
        zIndex:2,
        borderRadius:100,
        alignSelf:'center',
        marginTop:22
    },
    name : {
        fontSize:30,
        textAlign:'center',
        marginTop:100,
        color:'white'
    },
    biodata : {
        flexDirection:'row',
        marginTop:30
    },
    listbiodata : {
        flex:1,
        marginLeft:5
    },

    listBiodata1 : {
        flex:2,
    },
    biodatatext : {
        fontSize:18,
        color:'white',
        marginTop:5
    }
})