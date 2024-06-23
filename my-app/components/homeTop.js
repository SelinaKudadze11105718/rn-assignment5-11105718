import { StyleSheet, Text, View,Image } from 'react-native';


export default function HomeTop(){
    return(
        <View style={styles.container}>
            <View style={styles.profile}>
            <Image source={require('../assets/profile.png')}/>
            <View style={styles.welcome}>
                <Text style={{color:'#edd',fontSize:18}}>Welcome back,</Text>
               
                <Text style={{fontWeight:'bold',fontSize:20}}>Eric Atsu</Text>
            </View>
            </View>
            
            <Image source={require('../assets/search.png')} style={{marginTop:20}}/>

        </View>
    )
}


const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:140,
        marginBottom:40,
        

    },
    profile:{
        flexDirection:'row',
        gap:20,
    },
    welcome:{
        flexDirection:'column',
        gap:5,
    }

})