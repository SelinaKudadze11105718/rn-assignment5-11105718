import {View,Text,StyleSheet} from 'react-native';
import {AppContext} from './context';
import { useContext } from 'react';

export default function Cards(){

    const {binaryTheme} = useContext(AppContext);
    return(
    <View style={[{width:450,height:800},binaryTheme?styles.lightTheme:styles.darkTheme]}>
        <Text style={{textAlign:'center',color:'#FFFF',padding:100,marginTop:200,fontSize:20,marginRight:50,fontWeight:'bold',color:binaryTheme?'black':'white'}}>Cards</Text>

    </View>
);
}


const styles = StyleSheet.create({
    darkTheme:{
        backgroundColor:'#121212',
        color: 'white',
      },
    
    lightTheme:{
        backgroundColor:'#fff',
    }    
})