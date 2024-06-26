import { StyleSheet, Text, View,Image } from 'react-native';
import {AppContext} from './context';
import { useContext } from 'react';

export default function SettingsOptions(props){
    const {binaryTheme} = useContext(AppContext);
    return(
        <View style={styles.container}>
            <Text style={[styles.settingsText,binaryTheme?{color:'black'}:{color:'white'}]}>{props.options}</Text>
            <Image source={require('../assets/options.png')} style={styles.settingsImage}/>

        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginBottom: 30,
      
    },
    settingsText:{
        fontWeight:'bold',
        fontSize:20,
        marginRight:150,
        marginBottom:20

    },
    settingsImage:{
        height:30,
        width:30,
        position:'absolute',
        left:320

    }


})