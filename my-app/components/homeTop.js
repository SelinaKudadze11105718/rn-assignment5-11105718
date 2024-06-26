import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import { useContext } from 'react';
import { AppContext } from './context';


export default function HomeTop(){
    const {binaryTheme} = useContext(AppContext);
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
            <Image source={require('../assets/profile.png')} />
            <View style={styles.welcome}>
                <Text style={{color:'#edd',fontSize:18}}>Welcome back,</Text>
               
                <Text style={{fontWeight:'bold',fontSize:20}}>Eric Atsu</Text>
            </View>
            </View>
            
           <View style={binaryTheme?styles.Images:styles.darkTheme}><Image source={require('../assets/search.png')} style={{marginTop:20, position:'absolute',top:-13,left:6,width:25,height:25}}/></View> 

        </View>
    )
}


const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:140,
        marginBottom:40,
        marginTop:70
        

    },
    profile:{
        flexDirection:'row',
        gap:20,
    },
    welcome:{
        flexDirection:'column',
        gap:5,
    },
    Images:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        backgroundColor:'#FFF',
        position:'absolute', right:3
        
    },
    darkTheme:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        backgroundColor:'#454545',
        position:'absolute', right:3

    }

})