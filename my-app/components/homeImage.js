import { StyleSheet, Text, View, Image,Dimensions} from 'react-native';
import { useContext } from 'react';
import { AppContext } from './context';


export default function HomeImage(){
    const {binaryTheme}=useContext(AppContext);
    return(
        <View style={styles.container}>
            <Image source={require('../assets/Card.png')}  style={{marginLeft:10}}/>
            <View style={styles.transactions}>
               <View style={[binaryTheme?styles.Images:styles.darkTheme]}><Image source={require('../assets/send.png')} style={{position:'absolute',left:10,top:10}}/></View> 
                <View style={[binaryTheme?styles.Images:styles.darkTheme]}><Image source={require('../assets/receive.png')} style={{position:'absolute',left:10,top:10}}/></View>
                <View style={[binaryTheme?styles.Images:styles.darkTheme]}><Image source={require('../assets/loan.png')} style={{position:'absolute',left:7,top:6}}/></View>
                <View style={[binaryTheme?styles.Images:styles.darkTheme]}><Image source={require('../assets/topUp.png')} style={{position:'absolute',left:7,top:7}}/></View>
            </View>

            <View style={styles.labels}>
                <Text style={{color:binaryTheme?'black':'#808080'}}>Sent</Text>
                <Text style={{color:binaryTheme?'black':'#808080'}}>Receive</Text>
                <Text style={{color:binaryTheme?'black':'#808080'}}>Loan</Text>
                <Text style={{color:binaryTheme?'black':'#808080'}}>TopUp</Text>
                
            </View>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        marginTop:10,
        marginLeft:10,
        marginBottom:20,

    },

    transactions:{
        marginTop:20,
        marginLeft:25,
        flexDirection:'row',
        gap:49,
    },

    labels:{
        marginTop:20,
        marginLeft:20,
        flexDirection:'row',
        gap:52,
        
    },
    Images:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        backgroundColor:'#FFF',
        
    },

    darkTheme:{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        backgroundColor:'#454545'

    }
})