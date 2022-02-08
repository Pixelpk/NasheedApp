import React from "react";
import {SafeAreaView, Text} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import TopNasheeds from "../TabNavigation/TopNasheeds";
import LatestNasheeds from "../TabNavigation/LatestNasheeds";
import NewNasheeds from "../TabNavigation/NewNasheeds";
const Tab = createMaterialTopTabNavigator();

const Music =()=>{

    return(
      <SafeAreaView style={{height:"100%", width:"100%",backgroundColor:"black"}}>

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
              <Tab.Screen  name="Top Nasheeds" component={TopNasheeds}  />
              <Tab.Screen name="Latest Nasheeds" component={LatestNasheeds}  />
              <Tab.Screen name="New Nasheeds" component={NewNasheeds}  />
              {/*<Tab.Screen name="Albums" component={Albums}/>*/}
          </Tab.Navigator>
      </SafeAreaView>
    )

}

export default Music
