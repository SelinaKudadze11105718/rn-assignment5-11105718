import {View,Text,Image,StyleSheet} from 'react-native';


export default function Transactions(props){
    return(
        <View style={styles.container}>
            <View style={styles.trans}>
                <Image source={props.image}/>
                <View style={styles.companyName}>
                    <Text style={{fontWeight:'bold',fontSize:19}}>{props.company}</Text>
                    <Text style={{fontSize:15,color:'#edd'}}>{props.genre}</Text>
                </View>
            </View>
            <Text style={{fontWeight:'bold',fontSize:18,color:props.color,position:'absolute',left:280}}>{props.rate}</Text>
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
    }



})