import {View,Text,Image,StyleSheet,Dimensions} from 'react-native';
import { useContext } from 'react';
import { AppContext } from './context';


export default function Transactions(props){
    const {binaryTheme} =useContext(AppContext);
    return(
        <View style={styles.container}>
            <View style={styles.trans}>
                <View style={[binaryTheme?styles.Images:styles.darkTheme]}><Image source={props.image} style={{position:'absolute',left:10,top:10}}/></View>
                <View style={styles.companyName}>
                    <Text style={{fontWeight:'bold',fontSize:19,color:binaryTheme?'black':'white'}}>{props.company}</Text>
                    <Text style={{fontSize:15,color:'#808080'}}>{props.genre}</Text>
                </View>
            </View>
            <Text style={{fontWeight:'bold',fontSize:18,color:binaryTheme?props.color:props.color?props.color:'white',position:'absolute',left:280}}>{props.rate}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:110,
        marginTop:30,

    },

    trans:{
        flexDirection:'row',
        gap:20,
        marginLeft:20,

    },
    companyName:{
        marginLeft:5,
    },
    Images:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        backgroundColor:'#FFFF',
    },
    darkTheme:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        backgroundColor:'#454545',

    },
    Color:{
        
    }



})