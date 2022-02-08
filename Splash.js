import React, {useContext, useEffect} from "react";
import {Text, SafeAreaView, View, Image, ImageBackground} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {get_data} from "./AsyncController/Controller";
import BlogContext from "./ContextApi";




const Splash = (navigation) => {
     const {hack, setHack} = useContext(BlogContext)


    useEffect(() => {
            setTimeout(() => {
                navigation.navigation.replace("DashBoard", {
                    index1: 0,
                    pk: 0,
                });
            }, 5000);

        },
    );

    return (
        <View style={{flex:1, justifyContent:"center"}}>
                <ImageBackground source={require("./Images/Splash.png")} style={{flex:1}} >
                    <View style={{flex:1, justifyContent:"flex-end", alignItems:"center", marginBottom:hp("5%")}}>
                        <Image source={require("./Images/LogoName.png")} />
                    </View>
                    <View style={{alignItems:"center",justifyContent:"center", flexDirection:"row"}}>
                       <Text style={{fontSize:hp("1.6%"), color:"white", fontWeight:"bold",marginBottom:hp("2%")}}>
                          CRAFTED WITH
                       </Text>
                        <Text >
                            {" "}
                        </Text>
                        <Image source={require("./Images/HeartLogo.png")} style={{marginBottom:hp("2%")}}/>
                        <Text style={{marginBottom:hp("2%")}}  >
                            {" "}
                        </Text>
                        <Text style={{fontSize:hp("1.6%"),color:"white", fontWeight:"bold", marginBottom:hp("2%")}}>BY PIXEL PK TECHNOLOGIES </Text>
                    </View>
                </ImageBackground>

        </View>
    );
};
export default Splash;
