import { StyleSheet, Text, View, Image} from 'react-native';


export default function HomeImage(){
    return(
        <View style={styles.container}>
            <Image source={require('../assets/Card.png')} />
            <View style={styles.transactions}>
                <Image source={require('../assets/send.png')}/>
                <Image source={require('../assets/receive.png')}/>
                <Image source={require('../assets/loan.png')}/>
                <Image source={require('../assets/topUp.png')}/>
            </View>

            <View style={styles.labels}>
                <Text>Sent</Text>
                <Text>Receive</Text>
                <Text>Loan</Text>
                <Text>TopUp</Text>
                
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
        marginLeft:20,
        flexDirection:'row',
        gap:70,
    },

    labels:{
        marginTop:20,
        marginLeft:10,
        flexDirection:'row',
        gap:50,
        
    }
})