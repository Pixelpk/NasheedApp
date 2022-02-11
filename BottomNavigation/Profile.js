import React, {useContext, useEffect, useState} from "react";
import {
    Image,
    Platform, RefreshControl,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import FastImage from "react-native-fast-image";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from "@react-navigation/native";
import BlogContext from "../ContextApi";
import axios from "axios";
import {launchImageLibrary} from "react-native-image-picker";
import {get_data, save_data} from "../AsyncController/Controller";

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const Profile =()=>{

    const option = {

        quality: 0.2,
        options:{

            mediaType: 'photo',
            includeBase64:false
        }
    };
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, [hack]);



    const headers = {
        accept: 'application/json',
        'content-type': 'multipart/form-data',
    };

    const navigation = useNavigation()
    const {hack, setHack} = useContext(BlogContext)

    const [loader, setLoader] = useState(false)


    const CHeck = async ()=>{
        const images = await launchImageLibrary(option)
        console.log("image",images)
        const formdata = new FormData();
        formdata.append('avatar', {
            uri: images.assets[0].uri,
            type:  images.assets[0].type,
            name: images.assets[0].fileName
        });
        let res = await fetch(
            'https://api.thenasheed.com/api/update_profile_image',
            {
                method: 'post',
                body: formdata,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization':"Bearer "+hack.token
                },
            }
        )
        let responseJson = await res.json();

        if (responseJson.status === true) {
            alert('Upload Successful. Changes will take place after logout');
        }
        else {
        alert('UnSuccessful');
    }

    }

    return(

        <SafeAreaView style={{flex:1, backgroundColor:"black"}}>




           {hack === null ?

               <View  style={{backgroundColor:"black",flex:1, justifyContent:"center", alignItems:"center"}}>
                <Entypo name={"user"} color={"white"} size={99}/>
               <Text style={{color:"white"}}>No user signed In</Text>
               </View>:
           <View>
               <View style={{height:hp("40%"),borderBottomStartRadius:40,borderBottomEndRadius:40}}>
               <FastImage style={{height:"100%", width:"100%", borderBottomLeftRadius:40, borderBottomRightRadius:40 }} source={{uri:hack.cover_url}}>
                   <View style={{width:"100%", flexDirection:"row", justifyContent:"space-between", marginTop:hp("5%")}}>
                       <View>
                           {/*<MaterialIcons  style={{marginLeft:wp("2%")}} name="keyboard-arrow-left" color="white" size={30}/>*/}
                       </View>
                       <View style={{flexDirection:"row", alignItems:"center"}}>
                           {/*<Feather style={{marginRight:wp("5%")}} name="info" color="white" size={25}/>*/}
                           {/*<Entypo style={{marginRight:wp("4%")}} name={"dots-three-vertical"} size={15} color={"white"}/>*/}
                       </View>
                   </View>
               </FastImage>
           </View>
           <View style={{alignItems:"center", height:hp("14%")}}>
               <TouchableHighlight onPress={()=>CHeck()
               }>
               <View style={{height:150,width:150,alignItems:"center"}}>

                       <Image style={{top:-70,height:"100%", width:"100%", borderRadius:75}} source={{uri:hack.avatar_url}}/>
               </View>
               </TouchableHighlight>
           </View>
           <View style={{ alignItems:"center"}}>
               <View style={{alignItems:"center"}}>
               </View>
               <Text style={{color:"white",fontSize:hp("2.5%"), fontWeight:"bold"}}>
                   {hack.username}
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
           </View>
           }

       </SafeAreaView>
    )



}
export default Profile
