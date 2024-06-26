import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import {React,useContext,useState} from 'react';
import {AppContext} from './context';



import SettingsOptions from './settingsOptions';
import Theme from './themeButton';

export default function Settings({navigation}){

    const {theme}=useContext(AppContext);
    const {setTheme}=useContext(AppContext);
    const {binaryTheme}=useContext(AppContext);
    const {setBinaryTheme}=useContext(AppContext);
   
  
    console.log(theme);
    if(theme=='darkTheme'){
        setBinaryTheme(false)
      }
      else{
        setBinaryTheme(true)
      }
      console.log(binaryTheme)
    return(
        <ScrollView  style={binaryTheme? styles.lightTheme:styles.darkTheme}>
            <Text style={[styles.settings,binaryTheme?{color:'black'}:{color:'white'}]}>Settings</Text>
            <View style={styles.settingsOptions}>
                <SettingsOptions options={'Language'}/>
                <SettingsOptions options={'My Profile'}/>
                <SettingsOptions options={'Contact Us'}/>
                <SettingsOptions options={'Change Password'}/>
                <SettingsOptions options={'Privacy Policy'}/>
            </View>

            <Theme/>
            

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    settings:{
        fontWeight:'bold',
        fontSize:24,
        marginTop:70,
        textAlign:'center',
        marginBottom:60,

    },
    
    settingsOptions:{
        marginTop:20,
        marginBottom:250,
        marginLeft:10,
    },
    darkTheme:{
        backgroundColor:'#121212',
        color: 'white',
      },
    
    lightTheme:{
        backgroundColor:'#fff',
    }    

    

})
