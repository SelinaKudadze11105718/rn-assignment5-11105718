import { StyleSheet, Text, View ,ScrollView} from 'react-native';


import HomeTop from './homeTop';
import HomeImage from './homeImage';
import Transactions from './transactions';


export default function Home(){
    return(
        <ScrollView>
            <HomeTop/>
            <HomeImage/>
            <Transactions company={'Apple Store'} genre={'Entertainment'} rate={'-$5,99'} image={require('../assets/apple.png')}/>
            <Transactions company={'Spotify'} genre={'Music'} rate={'-$12,99'} image={require('../assets/spotify.png')}/>
            <Transactions company={'Money Transfer'} genre={'Entertainment'} rate={'$3,99'} image={require('../assets/moneyTransfer.png')} color={'blue'}/>
            <Transactions company={'Grocery'} genre={'Entertainment'} rate={'-$88'} image={require('../assets/grocery.png')} />

        </ScrollView>
    )
}
