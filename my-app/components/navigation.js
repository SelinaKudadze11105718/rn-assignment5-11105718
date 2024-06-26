import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';
import  React,{useState} from 'react';
import { StyleSheet, Text, View,ScrollView,SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { AppContext } from './context';



import Home from './home';
import Statistics from './statistics';
import Cards from './cards';
import Settings from './settings';

const Tab=createBottomTabNavigator();


export default function App(){
    const {binaryTheme}=useContext(AppContext);
    return(
      
          <NavigationContainer>
              <Tab.Navigator initialRouteName='Home'
                screenOptions={

                    ({route})=>({
                        headerShown:false,
                        tabBarIcon:({color,size})=>{
                            let iconName;
                            let rn=route.name;

                            if(rn==="Home"){
                                iconName='home';
                            } else if(rn==='Settings'){
                                iconName='settings';
                            } else if(rn==='My Cards'){
                                iconName='card';
                            }
                            else if(rn==='Statistics'){
                                iconName='pie-chart';
                            }
                            

                            return <Ionicons name={iconName} size={20}/>

                        },
                        tabBarStyle:{
                            padding:10,
                            backgroundColor: binaryTheme?'white':'#454545',
                        }
                    }

                )

               
                       
                
                } 
                    

                    >
                  <Tab.Screen name='Home' component={Home}/>
                  <Tab.Screen name='My Cards' component={Cards}/>
                  <Tab.Screen name='Statistics' component={Statistics}/>

                  <Tab.Screen name='Settings' component={Settings}/>
                  
                 
              </Tab.Navigator>
          </NavigationContainer>
         
    );
}