import React from "react";
import {SafeAreaView, Text} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";
import Popular from "../TabNavigation/Popular";
import TopNasheeds from "../TabNavigation/TopNasheeds";
import Favourite from "../TabNavigation/Favourite";
import Albums from "../TabNavigation/Albums";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
const Tab = createMaterialTopTabNavigator();

const Files =()=>{

    return(
        <SafeAreaView style={{height:hp("100%"),backgroundColor:"black"}}>

            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                },
                tabBarIndicatorStyle:{
                    backgroundColor:"black",
                },
                tabBarLabelStyle:{fontSize:hp("1.4%"), textTransform:"none",
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#585858',
                tabBarStyle:{borderTopColor:'rgba(99, 94, 205, 1)',backgroundColor:"#222225"}, headerTintColor:"white"})}>
                <Tab.Screen  name="Popular" component={Popular}  />
                <Tab.Screen name="Top Nasheeds" component={TopNasheeds}  />
                <Tab.Screen name="Favourite" component={Favourite}  />
                <Tab.Screen name="Albums" component={Albums}/>
            </Tab.Navigator>
        </SafeAreaView>
    )



}
export default Files
