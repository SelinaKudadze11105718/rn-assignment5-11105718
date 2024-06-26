import { StyleSheet, Text, View,Image,Switch } from 'react-native';
import React,{useState} from 'react';
import { useContext } from 'react';
import { AppContext } from './context';


export default function Theme(){
    const {theme}=useContext( AppContext );
    const {setTheme}=useContext( AppContext);
    const {binaryTheme}=useContext( AppContext);

    const [isEnabled,setIsEnabled]=useState(true);
    //TOGGLESWITCH ACTIVATES THE setIsEnabled function
    const toggleSwitch=()=>{setIsEnabled(previousSwitch=>!previousSwitch)
        {isEnabled? setTheme('lightTheme'):setTheme('darkTheme')}
        console.log(theme)
        
    };
    

  
    console.log(theme);
    return(
        <View style={styles.container}>
            <Text style={[styles.text,binaryTheme?{color:'black'}:{color:'white'}]}>Theme</Text>
            <Switch
            trackColor={isEnabled ? '#008000': '#808080'}
            thumbColor={isEnabled? '#FFFFFF': '#FFFFFF'}
            onValueChange={toggleSwitch}
            value={isEnabled}
            />
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:230,
       position:'absolute',top:555,

    },
    text:{
        marginLeft:10,
        fontSize:20,
        fontWeight:'bold',
        
    }
})