import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react";
import {Dimensions, StyleSheet, Image, SafeAreaView, Text, TouchableOpacity, View, Button, render} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,

} from 'react-native-responsive-screen';
import { createBottomTabNavigator , BottomTabBar} from '@react-navigation/bottom-tabs';
import Home from "./Home";
import Music from "./Music";
import Profile from "./Profile";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {clearAsyncStorage, get_data, save_data} from "../AsyncController/Controller";
import BlogContext from "../ContextApi";
import Dialog from "react-native-dialog";

import Files from "./Files";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import {Badge} from "react-native-elements";
import Fontisto from "react-native-vector-icons/Fontisto";
import Search from "./Search";
import Play from "../Play";


const Stack1 = createNativeStackNavigator();

const Tab = createBottomTabNavigator(

);
const TabBarComponent = props => <BottomTabBar {...props} />;
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CatagoryScreen from "../CatagoryScreen";

const HomeStackScreen =()=> (
    <Stack1.Navigator>
        <Stack1.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack1.Screen name="CatagoryScreen" component={CatagoryScreen} options={{headerShown: false}}/>
    </Stack1.Navigator>

)


const DashBoard=({route,navigation})=> {
    const {setHack, hack,topSong,check,setcheck2,check2} = useContext(BlogContext)
    const {pk,index1,check3} = route.params
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(check3)




    const showDialog = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleDelete = () => {
        clearAsyncStorage()
        navigation.navigate("SignIn")

    };

    const Heck =()=>{
        if (check2 === true){
            return(
                <Play index1={index1} pk={pk} />
            )
        }

        }




    const snapPoints = useMemo(() => ['25%', '25%', '100%']);


        let state = true

    return (

        <SafeAreaView style={{flex: 1, backgroundColor: "black"}}>
            <View>
                <Dialog.Container style={{backgroundColor: "red"}} visible={visible}>
                    <Dialog.Title>Logout</Dialog.Title>
                    <Dialog.Description>
                        Do you want to logout this account?.
                    </Dialog.Description>
                    <Dialog.Button label="Cancel" onPress={handleCancel}/>
                    <Dialog.Button label="Logout" onPress={handleDelete}/>
                </Dialog.Container>
            </View>
            <Tab.Navigator
                initialRouteName=" " screenOptions={({route}) => ({
                tabBarHideOnKeyboard: true,
                tabBarIcon: ({focused, color, size}) => {
                },
                tabBarActiveTintColor: 'rgba(255, 198, 113, 1)',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {borderTopColor: 'rgba(99, 94, 205, 1)', backgroundColor: "#222225"},
                headerTintColor: "white",

            })} tabBar={(props) => (
                <>

                    {check2 === true ? <Heck />
                        : null}

                    <TabBarComponent   navigation={props.navigation} {...props} style={{ borderTopColor: '#605F60' }} />


                        </>
            )}>

                <Tab.Screen options={{
                    headerStyle: {
                        backgroundColor: '#171719'

                    }, headerTitleAlign: "center",

                    alignItems: "center",
                    headerShadowVisible: false,
                    headerTitleStyle: {
                        fontSize: hp("2.5%")

                    },

                    // headerLeft:()=>{
                    //
                    //
                    // return(
                    //   <MaterialIcons style={{marginLeft:wp("2%")}} name="keyboard-arrow-left" color="white" size={25}/>
                    // )
                    // },
                    // headerRight:()=>{
                    // return(
                    // <View style={{flexDirection:"row", alignItems:"center"}}>
                    //
                    //     <EvilIcons style={{marginRight:wp("1%")}} name={"heart"} size={25} color={"white"}/>
                    //     <Entypo style={{marginRight:wp("4%")}} name={"dots-three-vertical"} size={10} color={"white"}/>
                    //
                    // </View>)
                    //
                    // },

                    tabBarIcon: ({focused, color, size}) => {
                        return <FontAwesome5 style={{textAlignVertical: "center"}} name="music" size={20}
                                             color={color}/>;
                    },
                }} name="Playlist" component={Music}/>
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
                        return <Fontisto style={{textAlignVertical:"center"}} name="bell" size={22} color={color}  />;
                    }, }}  name="Notification" component={Files}  />
                <Tab.Screen options={{
                    headerStyle: {
                        backgroundColor: '#171719',


                    }, headerRight: () => {
                        return (

                            <SafeAreaView style={{flexDirection: "row"}}>
                                {hack === null ?  <Ionicons onPress={()=> navigation.navigate("DashBoard", {
                                    screen:"Search",
                                    })} style={{marginRight:hp("2%")}} name="search" size={20} color={"white"}  /> :

                                    <View style={{flexDirection: "row"}}>

                                        <TouchableOpacity

                                            style={styles.iconContainer}
                                            onPress={() => showDialog()}
                                        >
                                            <View style={{
                                                borderRadius: hp("2%",),
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginRight: "10%",
                                                backgroundColor: "#FF7303"
                                            }}>


                                                <View style={{
                                                    justifyContent: "center",
                                                    alignItems: "center",


                                                    marginHorizontal: hp("2%"),

                                                }}>
                                                    <Text style={{color: "black"}}>Logout</Text>
                                                </View>
                                            </View>

                                        </TouchableOpacity>

                                    </View>

                                }
                            </SafeAreaView>
                        )

                    }, headerLeft: () =>
                        <Image style={{marginLeft: wp("5%")}}
                               source={require("../Images/Name.png")}/>


                    ,

                    tabBarIcon: ({focused, color, size}) => {
                        return (<View style={{
                            justifyContent: "center",
                            alignItems: "center",
                            height: hp("7%"),
                            width: wp("12%"),
                            borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2)
                        }}>
                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                height: 53,
                                width: 50,
                                borderRadius: Math.round((Dimensions.get('window').height + Dimensions.get('window').width) / 2)
                            }}>
                                <MaterialCommunityIcons name={"home"} color={color} size={30}/>
                            </View>
                        </View>);
                    }
                }} name=" " component={HomeStackScreen}/>
                <Tab.Screen   options={{ headerShown:true, headerStyle:{
                        backgroundColor: '#171719',



                    } ,headerTitleAlign: "center", tabBarIcon: ({ focused, color, size }) => {

                        return <Ionicons style={{textAlignVertical:"center"}} name="search" size={25} color={color}  />;
                    }}}  name="Search" component={Search}  />
                <Tab.Screen options={{
                    headerShown: false, tabBarIcon: ({focused, color, size}) => {
                        return <Ionicons style={{textAlignVertical: "center"}} name="person-circle-outline" size={25}
                                         color={color}/>;
                    },
                }} name="Profile" component={Profile}/>

            </Tab.Navigator>



        </SafeAreaView>

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
