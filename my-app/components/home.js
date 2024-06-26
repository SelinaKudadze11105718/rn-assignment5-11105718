import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import { React,useState } from 'react';
import {AppContext} from './context';
import { useContext } from 'react';


import HomeTop from './homeTop';
import HomeImage from './homeImage';
import Transactions from './transactions';


export default function Home({navigation}){
   const {binaryTheme} = useContext(AppContext);
  
    return(
        <ScrollView  style={[binaryTheme?styles.lightTheme:styles.darkTheme]}>
            <HomeTop />
            <HomeImage style={{marginLeft:0}}/>
            <View style={{flexDirection:'row',gap:180,marginLeft:10}}>
                <Text style={{color:binaryTheme?'black':'white',fontWeight:'bold',fontSize:20}}>Transaction</Text>
                <Text style={{color:'blue',fontSize:14,fontWeight:'bold'}}>See All</Text>
            </View>
            <Transactions company={'Apple Store'} genre={'Entertainment'} rate={'-$5,99'} image={require('../assets/apple.png')}/>
            <Transactions company={'Spotify'} genre={'Music'} rate={'-$12,99'} image={require('../assets/spotify.png')}/>
            <Transactions company={'Money Transfer'} genre={'Entertainment'} rate={'$3,99'} image={require('../assets/moneyTransfer.png')} color={'blue'}/>
            <Transactions company={'Grocery'} genre={'Entertainment'} rate={'-$88'} image={require('../assets/grocery.png')} />

           

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        marginTop:20,

    },
    darkTheme:{
        backgroundColor:'#121212',
        color: 'white',
      },
    
    lightTheme:{
        backgroundColor:'#fff',
    }    
})
