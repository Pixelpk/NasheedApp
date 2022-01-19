import React, {useState} from "react";
import {Dimensions,StyleSheet, Image,SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,

} from 'react-native-responsive-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Music from "./Music";
import Files from "./Files";
import Add from "./Add";
import Profile from "./Profile";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from "react-native-linear-gradient";
import {Avatar, Badge, Icon,withBadge} from "react-native-elements";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Entypo from "react-native-vector-icons/Entypo";




const Tab = createBottomTabNavigator(

);
const BadgedIcon = withBadge(12)(Icon);
const DashBoard=()=>{
    const [selectedValue, setSelectedValue] = useState("java");


    const _renderItem = item => {
        return (
            <View style={{height:40, width:50}}>
                <Text style={{color: "black"}}>{item.label}</Text>
            </View>
        );
    };


    return(

        <View style={{height:"100%", backgroundColor:"rgba(255, 198, 113, 1)"}}>
           <Tab.Navigator initialRouteName=" " screenOptions={({ route }) => ({
               tabBarIcon: ({ focused, color, size }) => {
               },
               tabBarActiveTintColor: 'rgba(255, 198, 113, 1)',
               tabBarInactiveTintColor: 'white',
               tabBarStyle:{borderTopColor:'rgba(99, 94, 205, 1)',backgroundColor:"#222225"}, headerTintColor:"white",})}>
               <Tab.Screen  options={{  headerStyle:{
                       backgroundColor: '#171719'

                   },  headerTitleAlign: "center",

                   alignItems: "center",
                   headerShadowVisible: false,
                   headerTitleStyle:{
                   fontSize:hp("2.5%")

                   },

                   headerLeft:()=>{


                   return(
                     <MaterialIcons style={{marginLeft:wp("2%")}} name="keyboard-arrow-left" color="white" size={25}/>
                   )
                   },
                   headerRight:()=>{
                   return(
                   <View style={{flexDirection:"row", alignItems:"center"}}>

                       <EvilIcons style={{marginRight:wp("1%")}} name={"heart"} size={25} color={"white"}/>
                       <Entypo style={{marginRight:wp("4%")}} name={"dots-three-vertical"} size={10} color={"white"}/>

                   </View>)

                   },

                   tabBarIcon: ({ focused, color, size }) => {
                       return <FontAwesome5 style={{textAlignVertical:"center"}} name="music" size={25} color={color}  />;
                   }, }}  name="Playlist" component={Music}  />
               <Tab.Screen options={{headerStyle:{
                       backgroundColor: '#171719'

                   },  headerTitleAlign: "center",

                   alignItems: "center",
                   headerShadowVisible: false,
                   headerTitleStyle:{
                       fontSize:hp("2.5%")

                   },   headerRight:()=>{
                       return(
                           <View style={{flexDirection:"row", alignItems:"center"}}>
                               <Fontisto style={{marginRight:wp("2%")}} name={"bell"} color={"white"} size={25}/>
                               <Badge
                                   status="error"
                                   badgeStyle={{backgroundColor:"yellow"}}
                                   containerStyle={{position: 'absolute', top: 2, right:wp("9%") }}
                               />


                               <Entypo style={{marginRight:wp("4%")}} name={"dots-three-vertical"} size={14} color={"white"}/>

                           </View>)

                   },   headerLeft:()=>{


                       return(
                           <MaterialIcons style={{marginLeft:wp("2%")}} name="keyboard-arrow-left" color="white" size={25}/>
                       )
                   },tabBarIcon: ({ focused, color, size }) => {
                   return <MaterialIcons style={{textAlignVertical:"center"}} name="folder-open" size={25} color={color}  />;
                   }, }}  name="Files" component={Files}  />
               <Tab.Screen options={{headerStyle:{
                       backgroundColor: '#171719',



                   },headerRight:()=>{
                      return(
                          <SafeAreaView style={{flexDirection:"row"}}>



                          <View style={{marginRight:wp("4%"), flexDirection:"row", alignItems:"center"}}>
                              <Fontisto name={"bell"} color={"white"} size={25}/>
                              <Badge
                                  status="error"
                                  containerStyle={{ position: 'absolute', top: 2, right:wp("0.2%") }}
                              />
                          </View>
                              <View style={{flexDirection:"row"}} >

                                  <TouchableOpacity

                                      style={styles.iconContainer}
                                      onPress={() => alert("ff")}
                                  >
                                      <LinearGradient style={{ borderRadius:hp("2%", ), flexDirection:"row", alignItems:"center", marginRight:"10%"}}  colors={["#FFD303", "#FF3803"]}>
                                          <MaterialIcons name={"arrow-drop-down"} color={"black"} size={25}/>

                                          <View style={{
                                              height: hp("4%"),
                                            width:wp("7%"),
                                              marginVertical:hp("0.2%"),

                                          }}>
                                              <View style={{

                                                  borderWidth: wp("0.8%"),
                                                  borderColor: "black",
                                                  borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2) ,
                                                  justifyContent: "center",
                                                  alignItems: "center"
                                              }}>
                                                  <Image style={{height: "100%", width: "100%", borderRadius: 200, backgroundColor:"lightblue"}}
                                                         source={require("../Images/Person.png")}/>
                                              </View>
                                          </View>



                                      </LinearGradient>

                                  </TouchableOpacity>

                              </View>

                          </SafeAreaView>
                      )

                   }, headerLeft: () =>

                       <Image style={{marginLeft: wp("5%")}}
                                       source={require("../Images/Name.png")}/>
                       , tabBarIcon: ({ focused, color, size }) => {
                       return( <View style={{justifyContent:"center", alignItems:"center", height:hp("7%"), width:wp("12%"), borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2)}}>
                           <LinearGradient colors={["#FFD303", "#FF3803"]} style={{
                               top:-20, justifyContent:"center", alignItems:"center", height:53, width:50, borderRadius:Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2)
                           }}>
                               <MaterialCommunityIcons name={"home"} color={"white"} size={25}/>
                           </LinearGradient>
                       </View>);
                   } }}  name=" " component={Home}  />
               <Tab.Screen  options={{headerShown:false,    tabBarIcon: ({ focused, color, size }) => {
                       return <Octicons style={{textAlignVertical:"center"}} name="plus" size={25} color={color}  />;
                   }}}  name="   " component={Add}  />
               <Tab.Screen options={{headerShown:false,   tabBarIcon: ({ focused, color, size }) => {
                       return <Ionicons style={{textAlignVertical:"center"}} name="person-circle-outline" size={25} color={color}  />;
                   }, }}  name="Profile" component={Profile}  />
           </Tab.Navigator>


        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    criteriaRow: {
        flexDirection: "row",
        padding: 25,
        alignItems: "center",
    },
    horizontalLine: {
        width: "100%",
        height: 1,
        backgroundColor: "#E0E0E0",
    },
    text: {
        paddingLeft: 15,
        paddingBottom: 15,
        marginBottom: 15,
        paddingTop: 15,
    },
    icon: {
        padding: 12,
    },
    iconContainer: {

    },
});
export default DashBoard
