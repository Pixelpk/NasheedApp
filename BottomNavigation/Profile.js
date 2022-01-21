import React from "react";
import {Image, SafeAreaView, Text, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";
import FastImage from "react-native-fast-image";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";


const Profile =()=>{
    const navigation = useNavigation()

    return(
       <SafeAreaView style={{height:hp("100%"), backgroundColor:"black"}}>

           <View style={{height:hp("40%"),borderBottomStartRadius:40,borderBottomEndRadius:40}}>
               <FastImage style={{height:"100%", width:"100%", borderBottomLeftRadius:40, borderBottomRightRadius:40 }} source={require("../Images/check.jpg")}>
                   <View style={{width:"100%", flexDirection:"row", justifyContent:"space-between", marginTop:hp("5%")}}>
                       <View>
                           <MaterialIcons  style={{marginLeft:wp("2%")}} name="keyboard-arrow-left" color="white" size={30}/>
                       </View>
                       <View style={{flexDirection:"row", alignItems:"center"}}>

                           <Feather style={{marginRight:wp("5%")}} name="info" color="white" size={25}/>
                           <Entypo style={{marginRight:wp("4%")}} name={"dots-three-vertical"} size={15} color={"white"}/>
                       </View>
                   </View>
               </FastImage>
           </View>
           <View style={{alignItems:"center", height:hp("14%")}}>
               <View style={{height:150,width:150,alignItems:"center"}}>
              <Image style={{top:-70,height:"100%", width:"100%", borderRadius:75}} source={require("../Images/check.jpg")}/>
               </View>
           </View>
           <View style={{ alignItems:"center"}}>
               <Text style={{color:"white",fontSize:hp("2.5%"), fontWeight:"bold"}}>
                   Muhammad Abid Hussain
               </Text>
               <Text style={{color:"white", fontSize:hp("1.5%")}}>
                   Success is the child of audacity.
               </Text>
           </View>
           <View style={{height:hp("8%"),flexDirection:"row",alignItems:"center", justifyContent:"space-around", backgroundColor:"#1F1F21", marginHorizontal:wp("12%"), borderRadius:20, marginTop:hp("2%")}}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Text style={{color:"white",fontSize:hp("3%"),marginRight:wp("3%")}}>1302</Text>
               <Text style={{color:"white", fontSize:hp("1.5%")}} >Followers</Text>
                </View>
               <View style={{flexDirection:"row", alignItems:"center" }}>
                   <Text style={{color:"white",fontSize:hp("3%"), marginRight:wp("3%")}}>09</Text>
                   <Text style={{color:"white",fontSize:hp("1.5%")}}>Following</Text>
               </View>

           </View>

       </SafeAreaView>
    )



}
export default Profile
