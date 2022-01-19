import React from "react";
import {Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from "@react-navigation/native";



const Register =()=>{
    const navigation = useNavigation()

    return(
        <ScrollView>


        <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
            <View style={{alignItems:"center", marginTop:hp("10%")}}>
                <Image source={require("./Images/LogoName.png")}/>
            </View>

            <View style={{marginTop:hp("10%"), marginLeft:wp("10%"), marginBottom:hp("4%")}}>
                <Text style={{color:"white", fontSize:hp("3%"),fontWeight:"bold"}}>
                    SIGN UP
                </Text>
            </View>
            <View>
                <TextInput placeholder="Full Name" placeholderTextColor="white" style={{paddingLeft:wp("3%"),fontSize:hp("2%"),borderRadius:hp("1.9%"),height:hp("7%",), backgroundColor:"#222225", marginHorizontal:wp("7%")}}>

                </TextInput>
            </View>
            <View>
                <TextInput placeholder="Username" placeholderTextColor="white" style={{paddingLeft:wp("3%"),fontSize:hp("2%"),borderRadius:hp("1.9%"),height:hp("7%",), backgroundColor:"#222225", marginHorizontal:wp("7%"), marginTop:hp("3%")}}>

                </TextInput>
            </View>
            <View>
                <TextInput placeholder="Email Address" placeholderTextColor="white" style={{paddingLeft:wp("3%"),fontSize:hp("2%"),borderRadius:hp("1.9%"),height:hp("7%",), backgroundColor:"#222225", marginHorizontal:wp("7%"), marginTop:hp("3%")}}>

                </TextInput>
            </View>
            <View>
                <TextInput placeholder="Password" placeholderTextColor="white" style={{paddingLeft:wp("3%"),fontSize:hp("2%"),borderRadius:hp("1.9%"),height:hp("7%",), backgroundColor:"#222225", marginHorizontal:wp("7%"), marginTop:hp("3%")}}>

                </TextInput>
            </View>
            <View>
                <TextInput placeholder="Confirm Password" placeholderTextColor="white" style={{paddingLeft:wp("3%"),fontSize:hp("2%"),borderRadius:hp("1.9%"),height:hp("7%",), backgroundColor:"#222225", marginHorizontal:wp("7%"), marginTop:hp("3%")}}>

                </TextInput>
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("DashBoard")}>
                    <LinearGradient style={{height:hp("6%"),marginTop:hp("4%"),justifyContent:"center", alignItems:"center", marginHorizontal:wp("7%"), borderRadius:hp("1.5%")}}  colors={["#FFD303", "#FF3803"]}>
                        <Text style={{color:"white", fontSize:hp("2%"), fontWeight:"bold"}}>
                            SignUp
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:"center", justifyContent:"center", marginHorizontal:wp("10%"), marginTop:hp("4%")}}>
                <Text style={{color:"white",textAlign:"center", fontSize:hp("1.3%")}}>
                  Already have an account?
                    <Text onPress={()=>navigation.navigate("SignIn")} style={{color:"#FF7303"}}>
                        Login {" "}
                    </Text>
                </Text>
            </View>
            <View style={{alignItems:"center", justifyContent:"center", marginHorizontal:wp("10%"), marginTop:hp("2%")}}>
                <Text style={{color:"white",textAlign:"center", fontSize:hp("1.3%")}}>
                    By signing up, you agree to our {" "}

                    <Text style={{color:"#FF7303"}}>
                        Terms {""}
                    </Text>
                    <Text style={{color:"white"}}>
                        and {""}
                    </Text>
                    <Text style={{color:"#FF7303"}}>
                        Privacy Policy
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
export default Register
