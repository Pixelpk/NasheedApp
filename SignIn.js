import React from "react";
import {Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";
import {useNavigation} from "@react-navigation/native";


const SignIn =()=>{
    const navigation = useNavigation()

    return(
        <ScrollView>


            <SafeAreaView style={{height:hp("100%"), backgroundColor:"black"}}>
                <View style={{alignItems:"center", marginTop:hp("10%")}}>
                    <Image source={require("./Images/LogoName.png")}/>
                </View>

                <View style={{marginTop:hp("10%"), marginLeft:wp("10%"), marginBottom:hp("4%")}}>
                    <Text style={{color:"white", fontSize:hp("3%"),fontWeight:"bold"}}>
                        LOG IN
                    </Text>
                </View>
                <View>
                    <TextInput placeholder="Email" placeholderTextColor="white" style={{paddingLeft:wp("3%"),fontSize:hp("2%"),borderRadius:hp("1.9%"),height:hp("7%",), backgroundColor:"#222225", marginHorizontal:wp("7%"), marginTop:hp("3%")}}>

                    </TextInput>
                </View>
                <View>
                    <TextInput placeholder="Password" placeholderTextColor="white" style={{paddingLeft:wp("3%"),fontSize:hp("2%"),borderRadius:hp("1.9%"),height:hp("7%",), backgroundColor:"#222225", marginHorizontal:wp("7%"), marginTop:hp("3%")}}>

                    </TextInput>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate("DashBoard")}>
                        <LinearGradient style={{height:hp("6%"),marginTop:hp("4%"),justifyContent:"center", alignItems:"center", marginHorizontal:wp("7%"), borderRadius:hp("1.5%")}}  colors={["#FFD303", "#FF3803"]}>
                        <Text style={{color:"white", fontSize:hp("2%"), fontWeight:"bold"}}>
                            LOGIN
                        </Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:"center", justifyContent:"center", marginHorizontal:wp("10%"), marginTop:hp("4%")}}>
                    <Text style={{color:"white",textAlign:"center", fontSize:hp("1.3%")}}>
                        Dont have an account?
                        <Text onPress={()=>navigation.navigate("Register")} style={{color:"#FF7303"}}>
                            Register {" "}
                        </Text>
                    </Text>
                </View>

                <View style={{alignItems:"center",justifyContent:"center", flexDirection:"row", marginVertical:hp("5%")}}>
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
            </SafeAreaView>
        </ScrollView>
    )


}
export default SignIn
