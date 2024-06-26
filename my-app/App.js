import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import  React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native';
import {AppContext} from './components/context';

import Home from './components/home';
import Statistics from './components/statistics';
import Cards from './components/cards';
import Settings from './components/settings';
import Navigation from './components/navigation';


// import Navigation from './components/navigation';

// const Tab=createBottomTabNavigator();
  


export default function App(){
  const [theme,setTheme]=useState('darkTheme');
  const [binaryTheme,setBinaryTheme]=useState('false');
    return(
      <AppContext.Provider value={{theme,setTheme,binaryTheme,setBinaryTheme}} >
        <Navigation/>
    </AppContext.Provider>
    );
}
  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkTheme:{
    backgroundColor:'#121212',
    color: 'white',
  },

lightTheme:{
    backgroundColor:'#fff',
  }
  
});



{/* <SafeAreaView style={[styles.container,binaryTheme? styles.lightTheme:styles.darkTheme]}>
      {/* <Home/> */}
      {/* <Settings theme={theme} setTheme={setTheme} binaryTheme={binaryTheme} setBinaryTheme={setBinaryTheme}/> */}
    //   <Navigation/>
    
    //   <StatusBar style="auto" />
    // </SafeAreaView> */}
